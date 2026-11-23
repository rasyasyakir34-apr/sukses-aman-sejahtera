import Link from "next/link";
import { site } from "@/lib/site";

export function BrandMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M30 8H15.5C11.36 8 8 11.36 8 15.5S11.36 23 15.5 23H24"
        stroke="currentColor"
        strokeWidth="4.6"
        strokeLinecap="square"
      />
      <path
        d="M10 32h14.5c4.14 0 7.5-3.36 7.5-7.5"
        stroke="#1C5BFF"
        strokeWidth="4.6"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function Brand({
  className = "",
  compact = false,
  inverse = false,
}: {
  className?: string;
  compact?: boolean;
  inverse?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — Beranda`}
      className={`group flex shrink-0 items-center gap-3 ${className}`}
    >
      <span
        className={`relative grid h-10 w-10 place-items-center rounded-[11px] shadow-[0_8px_24px_-10px_rgba(28,91,255,0.6)] transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105 ${
          inverse
            ? "bg-white"
            : "bg-white ring-1 ring-ink/10"
        }`}
      >
        <BrandMark className="h-6 w-6 text-ink" />
      </span>
      {!compact && (
        <span className="flex min-w-0 flex-col leading-none">
          <span
            className={`whitespace-nowrap font-display text-[14px] font-semibold tracking-[-0.02em] sm:text-[15px] ${
              inverse ? "text-white" : "text-ink"
            }`}
          >
            Sukses Aman Sejahtera
          </span>
          <span
            className={`mt-1.5 hidden whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.2em] sm:block ${
              inverse ? "text-white/55" : "text-ink/45"
            }`}
          >
            General Supplier · Palembang
          </span>
        </span>
      )}
    </Link>
  );
}
