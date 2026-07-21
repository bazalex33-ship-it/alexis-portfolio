import { ImageResponse } from "next/og";

/**
 * Favicon placeholder — generated at build time, no image file needed.
 * To use a real favicon instead, delete this file and drop `favicon.ico`
 * into src/app/.
 */
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#14181f",
          color: "#ffffff",
          fontSize: 34,
          fontWeight: 600,
          letterSpacing: "-0.04em",
          borderRadius: 14,
        }}
      >
        AB
      </div>
    ),
    size,
  );
}
