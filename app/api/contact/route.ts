export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // --- Admin Email ---
    const adminHtml = `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="color: #111827;">📩 New Contact Message</h2>
        <p>You received a new message via your website contact form.</p>
        <hr style="margin: 15px 0;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="background:#f6f6f6; padding:12px; border-radius:6px;">${message}</p>
        <hr style="margin: 15px 0;">
        <p style="font-size:12px; color:#6b7280;">This message was automatically generated.</p>
      </div>
    `;

    // --- Auto-reply Email to User ---
    const userHtml = `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="color: #111827;">Thank You for Contacting Us!</h2>
        <p>Hi ${name},</p>
        <p>We have received your message and will get back to you shortly.</p>
        <hr style="margin: 15px 0;">
        <p><strong>Your Message:</strong></p>
        <p style="background:#f6f6f6; padding:12px; border-radius:6px;">${message}</p>
        <p style="margin-top:20px;">Best regards,<br/>Boanventures Team</p>
      </div>
    `;

    // --- Send Admin Email ---
    await resend.emails.send({
      from: "Boanventures <demo@resend.dev>",
      to: process.env.RECEIVING_EMAIL!,
      subject: `New message from ${name}`,
      html: adminHtml,
    });

    // --- Send Auto-reply Email ---
    await resend.emails.send({
      from: "Boanventures <demo@resend.dev>",
      to: email,
      subject: `Thank you for contacting Boanventures!`,
      html: userHtml,
    });

    return NextResponse.json({ status: "success" });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ status: "error" }, { status: 500 });
  }
}
