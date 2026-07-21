"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Copies the email address to the clipboard. The result is announced through
 * a polite live region so it is not a purely visual confirmation.
 */
export function CopyEmail({
  email,
  label,
  copiedLabel,
}: {
  email: string;
  label: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      if (timeout.current) clearTimeout(timeout.current);
      timeout.current = setTimeout(() => setCopied(false), 2200);
    } catch {
      // Clipboard unavailable (older browser or denied permission):
      // the plain mailto link next to this button still works.
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={copy}
        className="group inline-flex items-center gap-2 rounded-full border border-transparent px-4 py-2.5 text-sm text-[var(--muted)] transition-colors duration-200 hover:border-[var(--line-strong)] hover:text-[var(--foreground)]"
      >
        <svg viewBox="0 0 16 16" aria-hidden="true" className="h-3.5 w-3.5">
          {copied ? (
            <path
              d="M3 8.5l3.5 3.5L13 5"
              stroke="currentColor"
              strokeWidth="1.6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : (
            <>
              <rect
                x="5.5"
                y="5.5"
                width="8"
                height="8"
                rx="1.6"
                stroke="currentColor"
                strokeWidth="1.4"
                fill="none"
              />
              <path
                d="M10.5 3.5a1.5 1.5 0 00-1.5-1.5H4a1.5 1.5 0 00-1.5 1.5V9A1.5 1.5 0 004 10.5"
                stroke="currentColor"
                strokeWidth="1.4"
                fill="none"
                strokeLinecap="round"
              />
            </>
          )}
        </svg>
        {copied ? copiedLabel : label}
      </button>
      <span aria-live="polite" className="sr-only">
        {copied ? `${copiedLabel}: ${email}` : ""}
      </span>
    </>
  );
}
