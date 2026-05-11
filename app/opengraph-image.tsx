import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Qorua — The Registry for MCP Servers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const interBold = await readFile(
    join(process.cwd(), "node_modules/@fontsource/inter/files/inter-latin-700-normal.woff")
  );

  return new ImageResponse(
    (
      <div
        style={{
          background: "#09090b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          fontFamily: "Inter",
        }}
      >
        {/* Violet pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "rgba(139, 92, 246, 0.12)",
            border: "1px solid rgba(139, 92, 246, 0.35)",
            borderRadius: "999px",
            padding: "8px 20px",
            marginBottom: "40px",
            alignSelf: "flex-start",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#a78bfa",
            }}
          />
          <span
            style={{
              color: "#a78bfa",
              fontSize: "18px",
              fontWeight: 600,
              letterSpacing: "0.02em",
            }}
          >
            Early access — MCP server registry
          </span>
        </div>

        {/* Logo */}
        <div
          style={{
            color: "#ffffff",
            fontSize: "96px",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            marginBottom: "28px",
          }}
        >
          qorua
        </div>

        {/* Tagline */}
        <div
          style={{
            color: "#ffffff",
            fontSize: "36px",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            marginBottom: "20px",
          }}
        >
          The registry for MCP servers.
        </div>

        {/* Pain stat */}
        <div
          style={{
            color: "#71717a",
            fontSize: "26px",
            fontWeight: 400,
          }}
        >
          19,000+ servers. Less than 5% earn a dollar.
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "56px",
            right: "96px",
            color: "#3f3f46",
            fontSize: "22px",
            fontWeight: 500,
            letterSpacing: "0.02em",
          }}
        >
          qorua.com
        </div>

        {/* Violet gradient accent — bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "480px",
            height: "480px",
            background:
              "radial-gradient(circle at 100% 100%, rgba(124, 58, 237, 0.18) 0%, transparent 70%)",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: interBold.buffer as ArrayBuffer,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
