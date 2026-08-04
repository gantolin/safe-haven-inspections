import { z } from "zod";

// Validation schema for contact form
const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(10, "Please enter a phone number we can reach you on."),
  address: z.string().min(5, "Please enter the property address."),
  timing: z.string().optional(),
  message: z
    .string()
    .min(10, "Please tell us a little more about what you're seeing."),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface ContactSubmissionResult {
  success: boolean;
  message: string;
  id?: string;
  error?: string;
}

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

// Web3Forms access keys are designed to be public — they only permit posting to
// the single inbox they were issued for, so embedding one in the client bundle
// is the intended usage and not a leak.
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

const CALL_US = "Please call (561) 632-6387 and we'll help right away.";

/**
 * Submit the contact form.
 *
 * Runs entirely in the browser and posts to Web3Forms, which delivers the
 * enquiry by email. The site is prerendered to static HTML and served without a
 * server runtime, so there is no backend to receive this — that is why it isn't
 * a server function any more.
 */
export async function submitContactForm({
  data,
}: {
  data: unknown;
}): Promise<ContactSubmissionResult> {
  try {
    const validated = contactFormSchema.parse(data) as ContactFormData;

    if (!ACCESS_KEY) {
      // Misconfigured build. Say so rather than showing a confirmation for an
      // enquiry that was never sent.
      console.error(
        "VITE_WEB3FORMS_KEY is not set — the contact form cannot deliver.",
      );
      return {
        success: false,
        error: `We couldn't submit your request. ${CALL_US}`,
        message: "",
      };
    }

    const delivered = await sendEnquiry(validated);

    // Email is the only capture path. If it failed, the lead is lost — say so
    // rather than showing a confirmation for an enquiry that never arrived.
    if (!delivered) {
      console.error("Contact submission was not delivered - lead lost.", {
        name: validated.name,
        email: validated.email,
      });
      return {
        success: false,
        error: `We couldn't submit your request. ${CALL_US}`,
        message: "",
      };
    }

    return {
      success: true,
      message:
        "Your request has been received. We'll contact you within one business day.",
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

/**
 * Deliver the enquiry via Web3Forms.
 */
async function sendEnquiry(data: ContactFormData): Promise<boolean> {
  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        subject: `New Mold Inspection Request - ${data.name}`,
        from_name: "Safe Haven Inspections Website",
        replyto: data.email,
        // Field labels below are what appear in the notification email.
        Name: data.name,
        Email: data.email,
        Phone: data.phone,
        "Property Address": data.address,
        "Preferred timing": data.timing || "Not specified",
        Message: data.message,
      }),
    });

    const result = await response.json().catch(() => null);

    if (!response.ok || !result?.success) {
      console.error(
        `Web3Forms error (${response.status} ${response.statusText}):`,
        result,
      );
      return false;
    }

    return true;
  } catch (error) {
    console.error("Contact delivery failed:", error);
    return false;
  }
}
