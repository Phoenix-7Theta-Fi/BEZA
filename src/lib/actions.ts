'use server';

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10).max(1000),
  serviceInterest: z.string().optional(),
});

interface FormSubmissionResult {
  success: boolean;
  message?: string;
}

export async function submitContactForm(
  data: z.infer<typeof contactFormSchema>
): Promise<FormSubmissionResult> {
  const validationResult = contactFormSchema.safeParse(data);

  if (!validationResult.success) {
    return { success: false, message: 'Invalid form data.' };
  }

  // In a real application, you would integrate with a CRM, email service, or database here.
  // For example, send an email using Nodemailer, or save to Firebase/Supabase.
  console.log('Contact form submitted:');
  console.log('Name:', data.name);
  console.log('Email:', data.email);
  console.log('Company:', data.company || 'N/A');
  console.log('Phone:', data.phone || 'N/A');
  console.log('Message:', data.message);
  console.log('Service Interest:', data.serviceInterest || 'N/A');
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate a successful submission
  return { success: true, message: 'Form submitted successfully!' };

  // Example of simulating an error:
  // return { success: false, message: 'Simulated server error.' };
}
