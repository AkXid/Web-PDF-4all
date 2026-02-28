import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";
export const alt = "PDF-4all – Ihr Spezialist für barrierefreie Dokumente";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = readFileSync(join(process.cwd(), "public/og-logo.png"));
  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#f1f5f9",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "72px 88px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Navy Akzentstreifen oben */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "10px",
            background: "#1a365d",
          }}
        />

        {/* Dekorativer Kreis rechts oben – Navy, dezent */}
        <div
          style={{
            position: "absolute",
            top: -150,
            right: -150,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "#1a365d",
            opacity: 0.07,
          }}
        />

        {/* Kleiner zweiter Kreis – Orange, sehr dezent */}
        <div
          style={{
            position: "absolute",
            bottom: 80,
            right: 80,
            width: 220,
            height: 220,
            borderRadius: "50%",
            background: "#d97706",
            opacity: 0.08,
          }}
        />

        {/* Logo – groß, Originalfarben auf hellem Hintergrund */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoBase64}
          width={740}
          height={185}
          style={{
            objectFit: "contain",
            objectPosition: "left",
            marginBottom: 24,
          }}
          alt="PDF-4all Logo"
        />

        {/* Oranger Akzentstreifen unter dem Logo */}
        <div
          style={{
            width: 72,
            height: 5,
            background: "#d97706",
            borderRadius: 3,
            marginBottom: 28,
          }}
        />

        {/* Subline */}
        <div
          style={{
            fontSize: 34,
            color: "#1a365d",
            fontWeight: 600,
            maxWidth: 780,
            lineHeight: 1.4,
            marginBottom: 36,
          }}
        >
          Ihr Spezialist für Barrierefreie Dokumente.
        </div>

        {/* USP-Tags – Navy Outline-Stil */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 14,
            marginBottom: 44,
          }}
        >
          {["PDF/UA", "BFSG-konform", "ISO 14289-1"].map((tag) => (
            <div
              key={tag}
              style={{
                background: "rgba(26,54,93,0.07)",
                border: "1.5px solid rgba(26,54,93,0.25)",
                color: "#1a365d",
                padding: "10px 22px",
                borderRadius: 6,
                fontSize: 19,
                fontWeight: 600,
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Trennlinie */}
        <div
          style={{
            width: "100%",
            height: 1,
            background: "rgba(26,54,93,0.15)",
            marginBottom: 28,
          }}
        />

        {/* Footer-Zeile */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#1a365d" }}>
              Dragan Bena
            </div>
            <div style={{ fontSize: 17, color: "#64748b" }}>
              PDF/UA Accessibility Senior Specialist
            </div>
          </div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "#d97706",
              letterSpacing: "0.5px",
            }}
          >
            pdf-4all.de
          </div>
        </div>

        {/* Navy Akzentstreifen unten */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "10px",
            background: "#1a365d",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
