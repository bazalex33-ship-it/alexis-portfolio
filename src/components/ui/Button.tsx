import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium " +
  "transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-out " +
  "active:translate-y-px motion-reduce:active:translate-y-0";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--accent)] text-white shadow-[var(--shadow-soft)] hover:bg-[var(--accent-hover)] hover:shadow-[var(--shadow-lift)]",
  secondary:
    "border border-[var(--line-strong)] bg-[var(--surface)] text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
  ghost:
    "border border-transparent text-[var(--foreground)] hover:border-[var(--line-strong)] hover:bg-[var(--surface)]",
};

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

/** A link styled as a button. External links open in a new tab. */
export function ButtonLink({
  href,
  variant = "primary",
  children,
  className = "",
  ...rest
}: ButtonLinkProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const isExternal = href.startsWith("http");
  const isAnchor = href.startsWith("#");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...rest}
      >
        {children}
      </a>
    );
  }

  if (isAnchor) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}

/** Small arrow that nudges on hover — used inside buttons and links. */
export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className={`h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5 motion-reduce:transform-none ${className}`}
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
