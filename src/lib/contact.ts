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
export const submitContactForm = createServerFn({ method: "POST" })
  .validator((data: unknown) => data)
  .handler(async ({ data }): Promise<ContactSubmissionResult> => {
    try {
      // Validate input
      const validated = contactFormSchema.parse(data) as ContactFormData;

      const [emailed, submissionId] = await Promise.all([
        sendEmailNotification(validated),
        storeSubmission(validated),
      ]);

      // If neither the notification nor the database captured this lead, it is
      // lost. Say so rather than showing a confirmation for a dropped enquiry.
      if (!emailed && submissionId === null) {
        console.error(
          "Contact submission captured by neither email nor database - lead lost.",
          { name: validated.name, email: validated.email }
        );
        return {
          success: false,
          error:
            "We couldn't submit your request. Please call (561) 632-6387 and we'll help right away.",
          message: "",
        };
      }

      return {
        success: true,
        message: "Your inquiry has been received. We'll contact you within one business day.",
        id: submissionId ?? undefined,
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
  });

/**
 * Send email notification to business
 */
async function sendEmailNotification(data: ContactFormData): Promise<boolean> {
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.warn("RESEND_API_KEY not configured. Email notifications disabled.");
    return false;
  }

  // safehaveninspectionsllc.com has no DNS zone, so it cannot be verified in
  // Resend and sends from it are rejected. Default to Resend's shared sender
  // until the domain's DKIM/SPF records are back, then set CONTACT_FROM_EMAIL.
  const fromAddress = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

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
        from: fromAddress,
        to: "safehaveninspectionsllc@gmail.com",
        reply_to: data.email,
        subject: `New Mold Inspection Request - ${data.name}`,
        text: emailContent,
        html: formatEmailHtml(data),
      }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      console.error(
        `Resend API error (${response.status} ${response.statusText}):`,
        error
      );
      return false;
    }

    console.log("Email sent successfully");
    return true;
  } catch (error) {
    console.error("Email notification failed:", error);
    return false;
  }
}

/**
 * Store submission in database
 */
async function storeSubmission(data: ContactFormData): Promise<string | null> {
  const dbUrl = process.env.DATABASE_URL;

  if (!dbUrl) {
    console.warn("DATABASE_URL not configured. Submission was not persisted.");
    return null;
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
    return null;
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
