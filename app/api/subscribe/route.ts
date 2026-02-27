import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { vorname, email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "E-Mail fehlt" }, { status: 400 });
  }

  const response = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.BREVO_API_KEY!,
    },
    body: JSON.stringify({
      email,
      attributes: { VORNAME: vorname || "" },
      listIds: [3],
      updateEnabled: true,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    return NextResponse.json({ error }, { status: response.status });
  }

  return NextResponse.json({ success: true });
}
