import { createServerFn } from "@tanstack/react-start";
import { Resend, type CreateEmailOptions } from "resend";

export interface SendEnquiryInput {
  name: string;
  mobile: string;
  email?: string;
  location: string;
  service: string;
  message?: string;
}

export interface SendEnquiryResult {
  success: boolean;
  error?: string;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export const sendEnquiryServerFn = createServerFn({ method: "POST" })
  .validator((data: unknown) => data as SendEnquiryInput)
  .handler(async ({ data }): Promise<SendEnquiryResult> => {
    const apiKey = process.env["RESEND_API_KEY"];
    if (!apiKey) {
      console.warn("RESEND_API_KEY environment variable is not set.");
      return {
        success: false,
        error: "RESEND_API_KEY is not configured.",
      };
    }

    const resend = new Resend(apiKey);
    const toEmail = "thulirinfraconstruction@gmail.com";
    const fromEmail = process.env["RESEND_FROM_EMAIL"] || "Thulir Infra <onboarding@resend.dev>";
    const replyTo = data.email?.trim();

    const emailOptions: CreateEmailOptions = {
      from: fromEmail,
      to: [toEmail],
      subject: `New Project Enquiry: ${data.service} - ${data.name}`,
      text: `
New Project Enquiry for Thulir Infra

Name: ${data.name}
Mobile: ${data.mobile}
Email: ${data.email?.trim() || "Not provided"}
Location: ${data.location}
Service: ${data.service}

Project Details:
${data.message?.trim() || "No additional details provided."}
      `.trim(),
      html: `
<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
  <div style="background-color: #28231f; padding: 24px; text-align: center; color: #fff;">
    <h2 style="margin: 0; font-size: 22px; letter-spacing: 1px;">THULIR INFRA</h2>
    <p style="margin: 6px 0 0; font-size: 13px; color: #d4a373;">New Project Enquiry Received</p>
  </div>
  <div style="padding: 28px;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px 0; color: #718096; font-size: 13px; width: 140px; font-weight: bold; text-transform: uppercase;">Client Name</td>
        <td style="padding: 8px 0; font-size: 15px; font-weight: 600; color: #1a202c;">${escapeHtml(data.name)}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #718096; font-size: 13px; font-weight: bold; text-transform: uppercase;">Mobile Number</td>
        <td style="padding: 8px 0; font-size: 15px; color: #1a202c;">
          <a href="tel:${escapeHtml(data.mobile)}" style="color: #9b5638; text-decoration: none; font-weight: 600;">${escapeHtml(data.mobile)}</a>
        </td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #718096; font-size: 13px; font-weight: bold; text-transform: uppercase;">Email Address</td>
        <td style="padding: 8px 0; font-size: 15px; color: #1a202c;">
          ${data.email?.trim() ? `<a href="mailto:${escapeHtml(data.email.trim())}" style="color: #9b5638; text-decoration: none;">${escapeHtml(data.email.trim())}</a>` : '<span style="color: #a0aec0; font-style: italic;">Not provided</span>'}
        </td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #718096; font-size: 13px; font-weight: bold; text-transform: uppercase;">Project Location</td>
        <td style="padding: 8px 0; font-size: 15px; color: #1a202c;">${escapeHtml(data.location)}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #718096; font-size: 13px; font-weight: bold; text-transform: uppercase;">Service Required</td>
        <td style="padding: 8px 0; font-size: 15px; font-weight: 600; color: #28231f;">${escapeHtml(data.service)}</td>
      </tr>
    </table>
    
    <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #edf2f7;">
      <h4 style="margin: 0 0 10px; color: #4a5568; font-size: 13px; text-transform: uppercase; font-weight: bold;">Project Details / Message</h4>
      <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; font-size: 14px; color: #2d3748; white-space: pre-wrap;">
        ${data.message?.trim() ? escapeHtml(data.message.trim()) : '<span style="color: #a0aec0; font-style: italic;">No additional details provided.</span>'}
      </div>
    </div>
  </div>
  <div style="background-color: #f7fafc; padding: 16px 24px; text-align: center; font-size: 12px; color: #718096; border-top: 1px solid #e2e8f0;">
    This email was sent from the contact form on Thulir Infra website to thulirinfraconstruction@gmail.com.
  </div>
</div>
      `.trim(),
      ...(replyTo ? { replyTo } : {}),
    };

    try {
      const response = await resend.emails.send(emailOptions);

      if (response.error) {
        console.error("Resend email delivery error:", response.error);
        return {
          success: false,
          error: response.error.message || "Failed to deliver email through Resend.",
        };
      }

      return {
        success: true,
      };
    } catch (err: unknown) {
      console.error("Failed to send enquiry email:", err);
      const message = err instanceof Error ? err.message : "Failed to send enquiry email.";
      return {
        success: false,
        error: message,
      };
    }
  });
