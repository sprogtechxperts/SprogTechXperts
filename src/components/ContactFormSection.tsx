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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  projectType: z.string().min(1, { message: "Please select a project type." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long." }),
});

type ContactFormValues = z.infer<typeof formSchema>;

const projectTypes = [
  "Web Development",
  "Mobile App Development",
  "E-commerce Solution",
  "SEO & Marketing",
  "UI/UX Design",
  "Other",
];

export function ContactFormSection() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      projectType: "",
      message: "",
    },
  });

  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (data: ContactFormValues) => {
    setLoading(true);
    try {
      // Contact Notification
      await emailjs.send(
        "service_hrqhowg",
        "template_s5f3bqj",
        {
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          message: data.message,
          projectType: data.projectType,
        },
        "pgXabnuGqu0o4J7rh"
      );

     // Auto-reply
await emailjs.send(
  "service_hrqhowg", 
  "template_xdredgr", // your auto-reply template ID
  {
    name: data.firstName,
    email: data.email,
    reply_to: data.email, 
  },
  "pgXabnuGqu0o4J7rh" 
);


      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We’ll get back to you shortly.",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Something went wrong while sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-sky-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-12">
          <h3 className="font-headline text-lg text-muted-foreground sm:text-xl">
            Get In Touch
          </h3>
          <h2 className="font-headline text-3xl font-bold tracking-tight text-purple-600 dark:text-purple-400 sm:text-4xl md:text-5xl mt-1">
            Let’s Start Your Project
          </h2>
        </div>

        <div className="mt-12 md:mt-16 grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Form Section */}
          <div className="lg:col-span-3 bg-white dark:bg-slate-800 p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(sendEmail)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John"
                            {...field}
                            className="bg-white dark:bg-slate-700 text-black dark:text-white border border-gray-300 dark:border-slate-600"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Doe"
                            {...field}
                            className="bg-white dark:bg-slate-700 text-black dark:text-white border border-gray-300 dark:border-slate-600"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="you@example.com"
                          {...field}
                          className="bg-white dark:bg-slate-700 text-black dark:text-white border border-gray-300 dark:border-slate-600"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Type</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white dark:bg-slate-700 text-black dark:text-white border border-gray-300 dark:border-slate-600">
                            <SelectValue placeholder="Select a project type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {projectTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project..."
                          className="resize-none bg-white dark:bg-slate-700 text-black dark:text-white border border-gray-300 dark:border-slate-600"
                          rows={5}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full shadow-lg hover:shadow-primary/50 transition-shadow"
                >
                  {loading ? "Sending..." : (
                    <>
                      <Send className="mr-2 h-5 w-5" /> Send Message
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>

          {/* Info Section */}
          <div className="lg:col-span-2 space-y-8 mt-8 lg:mt-0">
            <div>
              <h3 className="font-headline text-2xl font-bold text-foreground mb-3">
                Your Vision, Our Commitment
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We understand the trust it takes to hand over your dream project — and we don’t take it lightly. Every project we touch is built with care, communication, and cutting-edge code.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full mt-1">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">EMAIL</h4>
                  <a href="mailto:sprogtechxperts@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    sprogtechxperts@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full mt-1">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">CONTACT</h4>
                  <a href="tel:+917841034250" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 78410 34250
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
