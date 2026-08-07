"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  projectType: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function submitContactForm(formData: FormData) {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    projectType: formData.get("projectType"),
    message: formData.get("message"),
  };

  const validatedFields = contactSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      error: "Please fix the errors below.",
      fieldErrors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, projectType, message } = validatedFields.data;

  try {
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL_TO as string,
      subject: `New Project Inquiry from ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType || "Not specified"}</p>
        <h3>Message:</h3>
        <p>${message}</p>
      `,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Resend Error:", error);
    return { error: "Something went wrong sending your message. Please try again." };
  }
}
