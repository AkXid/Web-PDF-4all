import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const LOGO_URL = "https://www.pdf-4all.de/og-logo.png";
const PRIMARY = "#1a365d";
const LIGHT_BG = "#f7fafc";
const BORDER = "#e2e8f0";
const TEXT_MAIN = "#1a202c";
const TEXT_MUTED = "#718096";

function emailWrapper(content: string): string {
  return `
    <!DOCTYPE html>
    <html lang="de" style="color-scheme:light;">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="color-scheme" content="light" />
      <meta name="supported-color-schemes" content="light" />
      <style>
        :root { color-scheme: light; }
        body { color-scheme: light; }
      </style>
    </head>
    <body style="margin:0;padding:0;background:#f4f6f8;font-family:Arial,sans-serif;color-scheme:light;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8;padding:40px 0;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

              <!-- Header -->
              <tr>
                <td style="background:${PRIMARY};padding:28px 40px;">
                  <p style="margin:0;font-size:22px;font-weight:bold;color:#ffffff;letter-spacing:-0.5px;">PDF-4all.de</p>
                  <p style="margin:4px 0 0;font-size:12px;color:#a0aec0;letter-spacing:0.05em;">PDF/UA Accessibility</p>
                </td>
              </tr>

              ${content}

              <!-- Footer -->
              <tr>
                <td style="background:${LIGHT_BG};padding:20px 40px;border-top:1px solid ${BORDER};">
                  <p style="margin:0;font-size:12px;color:${TEXT_MUTED};line-height:1.6;">
                    PDF-4all.de · Dragan Bena · PDF/UA Accessibility Senior Specialist<br/>
                    <a href="https://www.pdf-4all.de" style="color:${PRIMARY};text-decoration:none;">www.pdf-4all.de</a>
                    &nbsp;·&nbsp;
                    <a href="mailto:info@pdf-4all.de" style="color:${PRIMARY};text-decoration:none;">info@pdf-4all.de</a>
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}

function buildNotificationHtml(data: {
  anrede: string;
  name: string;
  email: string;
  telefon: string;
  betreff: string;
  nachricht: string;
}): string {
  const field = (label: string, value: string) => `
    <tr>
      <td style="padding-bottom:20px;">
        <p style="margin:0 0 3px;font-size:11px;color:${TEXT_MUTED};text-transform:uppercase;letter-spacing:0.06em;">${label}</p>
        <p style="margin:0;font-size:15px;color:${TEXT_MAIN};">${value}</p>
      </td>
    </tr>
  `;

  const content = `
    <tr>
      <td style="padding:36px 40px 8px;">
        <p style="margin:0 0 6px;font-size:13px;color:${TEXT_MUTED};text-transform:uppercase;letter-spacing:0.06em;">Neue Kontaktanfrage</p>
        <h1 style="margin:0 0 28px;font-size:22px;color:${TEXT_MAIN};font-weight:bold;">
          ${data.betreff}
        </h1>
        <table width="100%" cellpadding="0" cellspacing="0">
          ${field("Anrede", data.anrede || "–")}
          ${field("Name", data.name)}
          ${field("E-Mail", `<a href="mailto:${data.email}" style="color:${PRIMARY};text-decoration:none;">${data.email}</a>`)}
          ${field("Telefon", data.telefon)}
          <tr>
            <td style="padding-bottom:8px;">
              <p style="margin:0 0 8px;font-size:11px;color:${TEXT_MUTED};text-transform:uppercase;letter-spacing:0.06em;">Nachricht</p>
              <div style="background:${LIGHT_BG};border-left:4px solid ${PRIMARY};padding:16px 20px;border-radius:0 4px 4px 0;">
                <p style="margin:0;font-size:15px;color:#2d3748;line-height:1.7;white-space:pre-wrap;">${data.nachricht}</p>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding:0 40px 36px;">
      </td>
    </tr>
  `;

  return emailWrapper(content);
}

function buildConfirmationHtml(anrede: string, name: string): string {
  const anredeText = anrede && anrede !== "Divers" ? `${anrede} ${name}` : name;

  const content = `
    <tr>
      <td style="padding:36px 40px 28px;">
        <h1 style="margin:0 0 20px;font-size:22px;color:${TEXT_MAIN};font-weight:bold;">
          Vielen Dank für Ihre Anfrage!
        </h1>
        <p style="margin:0 0 16px;font-size:15px;color:${TEXT_MAIN};line-height:1.7;">
          Guten Tag ${anredeText},
        </p>
        <p style="margin:0 0 16px;font-size:15px;color:${TEXT_MAIN};line-height:1.7;">
          ich habe Ihre Nachricht erhalten und melde mich <strong>schnellstmöglich</strong> persönlich bei Ihnen – in der Regel innerhalb eines Werktages.
        </p>

        <!-- Trennlinie -->
        <div style="border-top:1px solid ${BORDER};margin:28px 0;"></div>

        <p style="margin:0 0 12px;font-size:14px;font-weight:bold;color:${TEXT_MAIN};">Was Sie in der Zwischenzeit tun können:</p>
        <table cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding:6px 0;font-size:14px;color:${TEXT_MAIN};line-height:1.6;">
              &#8594;&nbsp; Schauen Sie sich meine <a href="https://www.pdf-4all.de/#leistungen" style="color:${PRIMARY};">Leistungen</a> an
            </td>
          </tr>
          <tr>
            <td style="padding:6px 0;font-size:14px;color:${TEXT_MAIN};line-height:1.6;">
              &#8594;&nbsp; Nutzen Sie den kostenlosen <a href="https://www.pdf-4all.de/bfsg-check" style="color:${PRIMARY};">BFSG-Check</a>
            </td>
          </tr>
          <tr>
            <td style="padding:6px 0;font-size:14px;color:${TEXT_MAIN};line-height:1.6;">
              &#8594;&nbsp; Bei dringenden Fragen: <a href="tel:+34613590301" style="color:${PRIMARY};">+34 613 590 301</a>
            </td>
          </tr>
        </table>

        <div style="border-top:1px solid ${BORDER};margin:28px 0;"></div>

        <p style="margin:0;font-size:14px;color:${TEXT_MUTED};line-height:1.7;">
          Mit freundlichen Grüßen<br/>
          <strong style="color:${TEXT_MAIN};">Dragan Bena</strong><br/>
          PDF/UA Accessibility Senior Specialist
        </p>
      </td>
    </tr>
  `;

  return emailWrapper(content);
}

export async function POST(request: Request) {
  try {
    const { anrede, name, email, telefon, betreff, nachricht } =
      await request.json();

    if (!name || !email || !betreff || !nachricht) {
      return NextResponse.json(
        { error: "Pflichtfelder fehlen." },
        { status: 400 }
      );
    }

    // Beide Mails parallel senden
    await Promise.all([
      // 1. Benachrichtigung an Dragan
      resend.emails.send({
        from: "Kontaktformular PDF-4all <info@pdf-4all.de>",
        to: "info@pdf-4all.de",
        replyTo: email,
        subject: `Neue Anfrage: ${betreff} – ${name}`,
        html: buildNotificationHtml({ anrede, name, email, telefon, betreff, nachricht }),
      }),
      // 2. Bestätigung an den Kunden
      resend.emails.send({
        from: "Dragan Bena – PDF-4all <info@pdf-4all.de>",
        to: email,
        replyTo: "info@pdf-4all.de",
        subject: "Ihre Anfrage bei PDF-4all.de – Bestätigung",
        html: buildConfirmationHtml(anrede, name),
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "E-Mail konnte nicht gesendet werden." },
      { status: 500 }
    );
  }
}
