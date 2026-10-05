import { Resend } from "resend";
import { site } from "@/lib/site";

const escape = (value) =>
  String(value).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

export async function POST(request) {
  const { name, email, subject, message } = await request.json();

  if (!name || !email || !subject || !message) {
    return Response.json({ error: "All fields are required." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  try {
    await new Resend(process.env.RESEND_API_KEY).emails.send({
      from: "Jenish Portfolio <onboarding@resend.dev>",
      to: site.email,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 15px; line-height: 1.6; color: #222">
          <p>New message from your portfolio:</p>
          <p><strong>Name:</strong> ${escape(name)}<br />
             <strong>Email:</strong> ${escape(email)}<br />
             <strong>Subject:</strong> ${escape(subject)}</p>
          <p style="white-space: pre-line">${escape(message)}</p>
        </div>
      `,
    });
    return Response.json({ message: "Message sent." });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json({ error: "Failed to send message." }, { status: 500 });
  }
}
