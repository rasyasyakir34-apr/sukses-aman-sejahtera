import { partners } from "@/lib/site";

function PartnerRow() {
  return (
    <div className="flex shrink-0 items-center">
      {partners.map((partner) => (
        <span
          key={partner.name}
          className="group flex shrink-0 items-center gap-8 px-7 sm:gap-12 sm:px-12"
        >
          <span className="whitespace-nowrap font-display text-lg font-semibold tracking-[-0.01em] text-ink/35 transition-colors duration-300 hover:text-ink sm:text-2xl">
            {partner.short}
          </span>
          <span className="h-1 w-1 rounded-full bg-ink/20" />
        </span>
      ))}
    </div>
  );
}

export function PartnerMarquee({ dark = false }: { dark?: boolean }) {
  return (
    <section
      aria-label="Mitra usaha"
      className={`border-y ${dark ? "border-white/10 bg-coal" : "border-ink/10 bg-paper"}`}
    >
      <div
        className={`shell flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:gap-10 sm:py-7 ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        <p
          className={`shrink-0 text-[9px] font-bold uppercase leading-[1.6] tracking-[0.2em] sm:w-[150px] ${
            dark ? "text-white/35" : "text-ink/40"
          }`}
        >
          Dipercaya dalam
          <br />
          pengadaan proyek
        </p>
        <div className="relative min-w-0 flex-1 overflow-hidden">
          <div
            className={`marquee-track ${dark ? "text-white" : "text-ink"}`}
            aria-hidden="true"
          >
            <PartnerRow />
            <PartnerRow />
          </div>
          <div
            className={`pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r to-transparent ${
              dark ? "from-coal" : "from-paper"
            }`}
          />
          <div
            className={`pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l to-transparent ${
              dark ? "from-coal" : "from-paper"
            }`}
          />
        </div>
      </div>
    </section>
  );
}
