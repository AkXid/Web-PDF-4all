import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  console.log("API Route aufgerufen");
  const { vorname, email } = await req.json();
  console.log("Email:", email);

  if (!email) {
    return NextResponse.json({ error: "E-Mail fehlt" }, { status: 400 });
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
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
