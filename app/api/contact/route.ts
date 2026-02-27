// Note: This file is kept for reference but won't be used with static export.
// For GitHub Pages, the contact form should use an external service.
// When switching to a server deployment, uncomment and configure:

/*
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  
  // Option A: Resend
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({ ... });

  // Option B: Webhook
  // await fetch(process.env.WEBHOOK_URL, { method: "POST", body: JSON.stringify(data) });

  return NextResponse.json({ success: true });
}
*/

export {};
