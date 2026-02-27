import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { vorname, email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "E-Mail fehlt" }, { status: 400 });
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts/doubleOptinConfirmation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        email,
        attributes: { VORNAME: vorname || "" },
        includeListIds: [5],
        templateId: 7,
        redirectionUrl: "https://pdf-4all.de",
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Brevo error:", JSON.stringify(error));
      return NextResponse.json({ error }, { status: response.status });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Fetch error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
