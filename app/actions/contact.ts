"use server";

import { contactSchema } from "@/lib/schemas/contact";

export async function submitContact(formData: unknown) {
  const parsed = contactSchema.safeParse(formData);
  if (!parsed.success) {
    return { success: false, error: "Please check your form entries." };
  }

  const { name, email, message } = parsed.data;

  // If RESEND_API_KEY is set, send via Resend; otherwise log for development
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // Development fallback — log to console
    console.log("Contact form submission:", { name, email, message });
    return { success: true };
  }

  const toList = (process.env.CONTACT_TO_EMAILS || "message@biblebrain.ng,collinscheks@gmail.com")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Bible Brain Website <noreply@biblebrain.ng>",
        to: toList,
        reply_to: email,
        subject: `New message from ${name} via biblebrain.ng`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        `,
      }),
    });

    if (!res.ok) {
      console.error("Resend API error:", await res.text());
      return { success: false, error: "Failed to send your message. Please try again." };
    }

    return { success: true };
  } catch (err) {
    console.error("Contact form error:", err);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
