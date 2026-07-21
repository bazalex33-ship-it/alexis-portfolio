import { ImageResponse } from "next/og";
import { hero, personal, site } from "@/data/portfolio";

/**
 * Social sharing image (LinkedIn, X, Slack…), generated from the data file.
 * Also reused as the Twitter card image via twitter-image.tsx.
 */
export const alt = `${personal.name} — ${personal.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f8f8f5",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#5c6472",
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: "#1f45c8",
              }}
            />
            {site.ogTagline}
          </div>

          <div
            style={{
              fontSize: 84,
              lineHeight: 1.05,
              letterSpacing: -2,
              color: "#14181f",
              maxWidth: 900,
            }}
          >
            {hero.headline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            borderTop: "1px solid #e2e2dc",
            paddingTop: 32,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ fontSize: 36, color: "#14181f" }}>
              {personal.name}
            </div>
            <div style={{ fontSize: 26, color: "#5c6472" }}>
              {personal.title}
            </div>
          </div>
          <div style={{ fontSize: 24, color: "#1f45c8" }}>
            {personal.availability}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
