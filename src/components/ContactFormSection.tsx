"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormState } from "react-dom";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";
import { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long." }),
});

type ContactFormValues = z.infer<typeof formSchema>;

const initialState: ContactFormState = {
  message: "",
  success: false,
};

export function ContactFormSection() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogMessage, setDialogMessage] = useState("");

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        setDialogTitle("Message Sent!");
        setDialogMessage(state.message);
        setShowDialog(true);
        form.reset(); // Reset form on success
      } else {
        // For errors, react-hook-form will display field errors.
        // If there are general issues (state.issues), they can be shown in an alert or toast.
        // For simplicity, relying on field errors.
        // If you want to show a dialog for errors too:
        // setDialogTitle("Submission Failed");
        // setDialogMessage(state.message + (state.issues ? ` Issues: ${state.issues.join(', ')}` : ''));
        // setShowDialog(true);
      }
    }
  }, [state, form]);

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Let’s Start <span className="text-primary">Your Project</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Have an idea or need a consultation? Fill out the form below, and we'll get back to you shortly.
            </p>
          </div>

          <Form {...form}>
            <form action={formAction} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} className="text-base md:text-sm"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} className="text-base md:text-sm"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your project, goals, or any questions you have."
                        className="resize-none text-base md:text-sm"
                        rows={6}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full shadow-lg hover:shadow-primary/50 transition-shadow">
                <Send className="mr-2 h-5 w-5" /> Send Message
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{dialogTitle}</AlertDialogTitle>
            <AlertDialogDescription>
              {dialogMessage}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowDialog(false)}>Close</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}
