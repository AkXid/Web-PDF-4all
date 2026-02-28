import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  console.log("API Route aufgerufen");
  const { vorname, email } = await req.json();
  console.log("Email:", email);

  if (!email) {
    return NextResponse.json({ error: "E-Mail fehlt" }, { status: 400 });
  }

  try {
    // Schritt 1: Kontakt in Brevo speichern
    const contactResponse = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        email,
        attributes: { VORNAME: vorname || "" },
        listIds: [5],
        updateEnabled: true,
      }),
    });

    if (!contactResponse.ok) {
      const error = await contactResponse.json();
      console.error("Brevo contact error:", JSON.stringify(error));
      return NextResponse.json({ error }, { status: contactResponse.status });
    }

    // Schritt 2: Template #1 "2.PDF jetzt ansehen" direkt verschicken
    const emailResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        templateId: 1,
        to: [{ email, name: vorname || "" }],
        params: { VORNAME: vorname || "" },
      }),
    });

    if (!emailResponse.ok) {
      const error = await emailResponse.json();
      console.error("Brevo email error:", JSON.stringify(error));
      return NextResponse.json({ error }, { status: emailResponse.status });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Fetch error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
