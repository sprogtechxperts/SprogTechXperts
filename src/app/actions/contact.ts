"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  const formData = Object.fromEntries(data);
  const parsed = contactSchema.safeParse(formData);

  if (!parsed.success) {
    const issues = parsed.error.issues.map((issue) => issue.message);
    return {
      message: "Invalid form data.",
      fields: formData as Record<string, string>,
      issues,
      success: false,
    };
  }

  // Simulate saving to Firebase or sending an email
  // For now, we'll just log it and return success
  console.log("Form data submitted:", parsed.data);

  // In a real application, you would integrate with Firebase here:
  // try {
  //   const db = getFirestore(); // Assuming Firebase is initialized
  //   await addDoc(collection(db, "messages"), {
  //     ...parsed.data,
  //     timestamp: serverTimestamp(),
  //   });
  //   return { message: "Message sent successfully!", success: true };
  // } catch (error) {
  //   console.error("Error saving message to Firebase:", error);
  //   return { message: "Failed to send message. Please try again later.", success: false };
  // }

  return { message: "Your message has been sent successfully! We'll get back to you soon.", success: true };
}
