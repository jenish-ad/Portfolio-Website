import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    await resend.emails.send({
      from: "Jenish Portfolio <onboarding@resend.dev>",
      to: "adhicary.jen@gmail.com",
      subject: `Portfolio Contact: ${safeSubject}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; color: #222222; line-height: 1.6; font-size: 15px;">
          <p>Dear Jenish,</p>

          <p>
            You have received a new message through your portfolio contact form.
            The details are provided below for your review.
          </p>

          <table cellpadding="0" cellspacing="0" style="margin-top: 18px; margin-bottom: 22px; width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; width: 120px; font-weight: bold; color: #333333;">
                Name:
              </td>
              <td style="padding: 8px 0; color: #333333;">
                ${safeName}
              </td>
            </tr>

            <tr>
              <td style="padding: 8px 0; width: 120px; font-weight: bold; color: #333333;">
                Email:
              </td>
              <td style="padding: 8px 0; color: #333333;">
                <a href="mailto:${safeEmail}" style="color: #222222; text-decoration: underline;">
                  ${safeEmail}
                </a>
              </td>
            </tr>

            <tr>
              <td style="padding: 8px 0; width: 120px; font-weight: bold; color: #333333;">
                Subject:
              </td>
              <td style="padding: 8px 0; color: #333333;">
                ${safeSubject}
              </td>
            </tr>
          </table>

          <p style="margin-bottom: 8px;"><strong>Message:</strong></p>

          <p style="white-space: pre-line; margin-top: 0;">
            ${safeMessage}
          </p>
        </div>
      `,
    });

    return Response.json(
      { message: "Message sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return Response.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}