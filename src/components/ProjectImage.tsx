"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProjectImage as ProjectImageType } from "@/data";

/**
 * Renders a project image, or a clean typographic placeholder when the file
 * is missing from /public. Drop the .webp file in and it appears automatically.
 */
export function ProjectImage({
  image,
  priority = false,
}: {
  image: ProjectImageType;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface-muted)]">
      {failed ? (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line-strong)] bg-[var(--surface)]">
            <svg
              viewBox="0 0 20 20"
              aria-hidden="true"
              className="h-4 w-4 text-[var(--subtle)]"
            >
              <rect
                x="2.5"
                y="4"
                width="15"
                height="12"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.3"
                fill="none"
              />
              <path
                d="M4 13.5l3.5-3.5 2.5 2.5L13 9l3 3"
                stroke="currentColor"
                strokeWidth="1.3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          {image.caption ? (
            <figcaption className="text-sm font-medium text-[var(--foreground)]">
              {image.caption}
            </figcaption>
          ) : null}
          <p className="text-xs leading-relaxed text-[var(--subtle)]">
            Visual withheld until launch
          </p>
        </div>
      ) : (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          priority={priority}
          onError={() => setFailed(true)}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transform-none"
        />
      )}
    </figure>
  );
}
