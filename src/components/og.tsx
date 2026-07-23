import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { getContent, shared, type Locale } from "@/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * The portrait must be inlined as a data URI: the image generator cannot fetch
 * files over the network at build time. Returns null if the file is missing, so
 * the card still renders (text only) instead of breaking the build.
 */
async function loadPortrait(): Promise<string | null> {
  const src = shared.photoSrc.trim();
  if (!src) return null;

  try {
    const file = await readFile(path.join(process.cwd(), "public", src));
    const type = src.endsWith(".png") ? "image/png" : "image/jpeg";
    return `data:${type};base64,${file.toString("base64")}`;
  } catch {
    return null;
  }
}

/** One sharing image per language, built from that language's content. */
export async function renderShareImage(locale: Locale) {
  const c = getContent(locale);
  const portrait = await loadPortrait();

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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 56,
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
              {c.site.ogTagline}
            </div>

            <div
              style={{
                display: "flex",
                fontSize: portrait ? 68 : 84,
                lineHeight: 1.05,
                letterSpacing: -2,
                color: "#14181f",
                maxWidth: portrait ? 640 : 900,
              }}
            >
              {c.hero.headline}
            </div>
          </div>

          {portrait ? (
            // next/image has no meaning here: this tree is rasterised into a
            // PNG at build time, never rendered in a browser.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={portrait}
              alt=""
              width={280}
              height={350}
              style={{
                width: 280,
                height: 350,
                borderRadius: 24,
                objectFit: "cover",
                border: "1px solid #e2e2dc",
              }}
            />
          ) : null}
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
            <div style={{ display: "flex", fontSize: 36, color: "#14181f" }}>
              {c.personal.name}
            </div>
            <div style={{ display: "flex", fontSize: 26, color: "#5c6472" }}>
              {c.personal.title}
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#1f45c8" }}>
            {c.personal.availability}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
