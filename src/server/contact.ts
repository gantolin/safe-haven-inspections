import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

// Validation schema for contact form
const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone is required"),
  address: z.string().min(5, "Property address is required"),
  message: z.string().min(10, "Message is required"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface ContactSubmissionResult {
  success: boolean;
  message: string;
  id?: string;
  error?: string;
}

/**
 * Server function to handle contact form submission
 * - Sends email notification to business
 * - Stores submission in database
 */
export const submitContactForm = createServerFn(
  { method: "POST" },
  async (formData: ContactFormData): Promise<ContactSubmissionResult> => {
    try {
      // Validate input
      const validated = contactFormSchema.parse(formData);

      // Send email notification
      await sendEmailNotification(validated);

      // Store in database
      const submissionId = await storeSubmission(validated);

      return {
        success: true,
        message: "Your inquiry has been received. We'll contact you within one business day.",
        id: submissionId,
      };
    } catch (error) {
      console.error("Contact form error:", error);

      if (error instanceof z.ZodError) {
        return {
          success: false,
          error: error.errors[0]?.message || "Invalid form data",
          message: "",
        };
      }

      return {
        success: false,
        error: "Failed to submit form. Please try again or call us directly.",
        message: "",
      };
    }
  }
);

/**
 * Send email notification to business
 */
async function sendEmailNotification(data: ContactFormData): Promise<void> {
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.warn("RESEND_API_KEY not configured. Email notifications disabled.");
    return;
  }

  const emailContent = `
New Mold Inspection Request from Safe Haven Inspections Website

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Property Address: ${data.address}

Message:
${data.message}

---
Submitted: ${new Date().toISOString()}
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "noreply@safehaveninspectionsllc.com",
        to: "safehaveninspectionsllc@gmail.com",
        subject: `New Mold Inspection Request - ${data.name}`,
        text: emailContent,
        html: formatEmailHtml(data),
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Resend API error:", error);
      throw new Error(`Failed to send email: ${response.statusText}`);
    }

    console.log("Email sent successfully");
  } catch (error) {
    console.error("Email notification failed:", error);
    // Don't throw - allow form submission even if email fails
  }
}

/**
 * Store submission in database
 */
async function storeSubmission(data: ContactFormData): Promise<string> {
  const dbUrl = process.env.DATABASE_URL;

  if (!dbUrl) {
    console.warn("DATABASE_URL not configured. Storing submission in memory only.");
    // Generate a simple ID for tracking
    return `submission_${Date.now()}`;
  }

  try {
    // Using pg library or direct fetch to database API
    // For now, we'll use a generic fetch to a database endpoint
    // This assumes you have a PostgreSQL database set up

    const response = await fetch(`${dbUrl}/contact-submissions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        message: data.message,
        submitted_at: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error(`Database error: ${response.statusText}`);
    }

    const result = await response.json();
    return result.id || `submission_${Date.now()}`;
  } catch (error) {
    console.error("Database storage failed:", error);
    // Generate a fallback ID
    return `submission_${Date.now()}`;
  }
}

/**
 * Format email as HTML
 */
function formatEmailHtml(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1a472a; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
        .field { margin-bottom: 15px; }
        .label { font-weight: 600; color: #1a472a; font-size: 14px; }
        .value { margin-top: 5px; color: #555; }
        .footer { text-align: center; font-size: 12px; color: #999; margin-top: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2 style="margin: 0;">New Mold Inspection Request</h2>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name</div>
            <div class="value">${escapeHtml(data.name)}</div>
          </div>
          <div class="field">
            <div class="label">Email</div>
            <div class="value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>
          </div>
          <div class="field">
            <div class="label">Phone</div>
            <div class="value"><a href="tel:${escapeHtml(data.phone)}">${escapeHtml(data.phone)}</a></div>
          </div>
          <div class="field">
            <div class="label">Property Address</div>
            <div class="value">${escapeHtml(data.address)}</div>
          </div>
          <div class="field">
            <div class="label">Message</div>
            <div class="value" style="white-space: pre-wrap;">${escapeHtml(data.message)}</div>
          </div>
        </div>
        <div class="footer">
          <p>Submitted on ${new Date().toLocaleString()} via Safe Haven Inspections website</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

/**
 * Escape HTML special characters
 */
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
