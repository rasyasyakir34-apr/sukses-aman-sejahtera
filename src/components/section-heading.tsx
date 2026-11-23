export function SectionHeading({
  label,
  title,
  description,
  action,
  dark = false,
  className = "",
}: {
  label: string;
  title: React.ReactNode;
  description?: string;
  action?: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      data-reveal
      className={`grid gap-6 border-t pt-6 lg:grid-cols-[1fr_0.62fr] lg:items-end lg:gap-16 ${
        dark ? "border-white/25" : "border-ink/12"
      } ${className}`}
    >
      <div>
        <p className={`eyebrow ${dark ? "text-cyan-100" : "text-smoke"}`}>
          {label}
        </p>
        <h2
          className={`display-lg mt-6 max-w-[760px] text-balance ${
            dark ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </div>

      {(description || action) && (
        <div className="lg:pb-1.5">
          {description && (
            <p
              className={`body-lg max-w-md ${
                dark ? "text-white/75" : "text-smoke"
              }`}
            >
              {description}
            </p>
          )}
          {action && <div className="mt-6">{action}</div>}
        </div>
      )}
    </div>
  );
}
