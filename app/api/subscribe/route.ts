import { NextRequest, NextResponse } from "next/server";

// Einfaches In-Memory Rate Limiting (pro Serverless-Instanz)
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 Minute

function isRateLimited(identifier: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(identifier);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(identifier, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

export async function POST(req: NextRequest) {
  // Rate Limiting
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." },
      { status: 429 }
    );
  }

  const { vorname, email } = await req.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "E-Mail fehlt" }, { status: 400 });
  }

  // Vorname sanitisieren
  const cleanVorname = typeof vorname === "string"
    ? vorname.trim().slice(0, 100)
    : "";

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
        attributes: { VORNAME: cleanVorname },
        listIds: [5],
        updateEnabled: true,
      }),
    });

    if (!contactResponse.ok) {
      return NextResponse.json(
        { error: "Anmeldung fehlgeschlagen. Bitte versuchen Sie es später erneut." },
        { status: 500 }
      );
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
        to: [{ email, name: cleanVorname }],
        params: { VORNAME: cleanVorname },
      }),
    });

    if (!emailResponse.ok) {
      return NextResponse.json(
        { error: "E-Mail konnte nicht gesendet werden. Bitte versuchen Sie es später erneut." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut." },
      { status: 500 }
    );
  }
}
