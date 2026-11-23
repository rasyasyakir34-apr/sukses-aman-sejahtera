import { Icon } from "@/components/icons";

export function PageHero({
  label,
  title,
  description,
  meta,
  children,
}: {
  label: string;
  title: React.ReactNode;
  description: string;
  meta?: Array<{ value: string; label: string }>;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky via-[#f4f8ff] to-white pb-12 pt-28 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-44">
      <div className="blueprint absolute inset-0 opacity-80" aria-hidden="true" />
      <div
        className="absolute -right-28 -top-10 h-[440px] w-[440px] rounded-full bg-signal/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-cyan-300/25 blur-[100px]"
        aria-hidden="true"
      />

      <div className="shell relative">
        <p className="eyebrow text-signal">{label}</p>

        <div className="mt-7 grid items-end gap-6 lg:grid-cols-[1.55fr_0.75fr] lg:gap-14">
          <h1 className="display-lg max-w-[900px] text-balance text-ink">
            {title}
          </h1>
          <div className="lg:pb-2">
            <p className="body-lg max-w-md text-smoke">{description}</p>
            {children && <div className="mt-6">{children}</div>}
          </div>
        </div>

        {meta && (
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:mt-16">
            {meta.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-ink/[0.07] bg-white/80 px-5 py-4 shadow-[0_12px_30px_-24px_rgba(10,27,61,0.4)] backdrop-blur-sm sm:px-6 sm:py-5"
              >
                <p className="font-display text-3xl font-semibold tracking-[-0.04em] text-signal-deep sm:text-4xl">
                  {item.value}
                </p>
                <p className="mt-1.5 text-[9px] font-bold uppercase leading-snug tracking-[0.15em] text-ink/40 sm:text-[10px]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 right-4 hidden select-none font-display text-[16vw] font-semibold leading-none tracking-[-0.08em] text-signal/[0.045] lg:block"
      >
        {String(label).replace(/[^A-Za-z ]/g, "").slice(0, 10)}
      </span>

      <a
        href="#konten"
        aria-label="Scroll ke konten"
        className="absolute bottom-6 right-6 hidden h-10 w-10 place-items-center rounded-full border border-ink/10 bg-white text-ink/40 shadow-sm transition-colors hover:border-signal hover:text-signal lg:grid"
      >
        <Icon name="chevron-down" size={16} />
      </a>
    </section>
  );
}
