import Link from "next/link";
import { Brand, BrandMark } from "@/components/brand";
import { Icon } from "@/components/icons";
import { categories, navigation, site, waLink } from "@/lib/site";

const marqueeWords = [
  "Material tepat",
  "Proyek jalan",
  "Sejak 2013",
  "Palembang",
];

function MarqueeRow() {
  return (
    <div className="flex shrink-0 items-center">
      {marqueeWords.map((word) => (
        <span key={word} className="flex items-center">
          <span className="px-6 font-display text-[9vw] font-semibold leading-none tracking-[-0.05em] text-signal/15 sm:px-10 sm:text-[72px]">
            {word}
          </span>
          <span className="text-[9vw] leading-none text-signal/25 sm:text-[64px]">
            ✳
          </span>
        </span>
      ))}
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-ink/10 bg-sky text-ink">
      <div className="blueprint absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-signal/10 blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative border-b border-ink/10 py-6 sm:py-8">
        <div className="marquee-track marquee-track-slow" aria-hidden="true">
          <MarqueeRow />
          <MarqueeRow />
        </div>
      </div>

      <div className="shell relative pb-8 pt-14 sm:pt-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1fr_1.2fr] lg:gap-10">
          <div>
            <Brand />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-smoke">
              General supplier untuk material, perlengkapan, dan kebutuhan
              proyek konstruksi di Palembang dan sekitarnya.
            </p>
            <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-signal/20 bg-white/70 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-signal-deep">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
              </span>
              Melayani sejak 2013
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-ink/35">
              Navigasi
            </p>
            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-smoke transition-colors hover:text-signal-deep"
                  >
                    <span className="h-px w-0 bg-signal transition-all duration-300 group-hover:w-3" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-ink/35">
              Layanan
            </p>
            <ul className="mt-5 space-y-3">
              {categories.slice(0, 5).map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/layanan#${category.slug}`}
                    className="text-sm font-medium leading-snug text-smoke transition-colors hover:text-signal-deep"
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/layanan"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-signal-deep"
                >
                  Semua kategori
                  <Icon name="arrow-right" size={14} />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-ink/35">
              Kantor
            </p>
            <address className="mt-5 space-y-3 text-sm not-italic leading-relaxed text-smoke">
              <p className="flex gap-3">
                <Icon
                  name="pin"
                  size={16}
                  className="mt-0.5 shrink-0 text-signal"
                />
                {site.address}
              </p>
              <a
                href={waLink(
                  "Halo CV. Sukses Aman Sejahtera, saya ingin menanyakan kebutuhan pengadaan.",
                )}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 transition-colors hover:text-signal-deep"
              >
                <Icon name="whatsapp" size={16} className="text-signal" />
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 break-all transition-colors hover:text-signal-deep"
              >
                <Icon name="mail" size={16} className="text-signal" />
                {site.email}
              </a>
              <p className="flex items-center gap-3 text-ink/45">
                <Icon name="clock" size={16} className="text-signal" />
                {site.hours}
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-ink/10 pt-6 text-[11px] text-ink/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Seluruh hak cipta.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a
              href={site.affiliate.url}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-signal-deep"
            >
              Afiliasi: {site.affiliate.name}
              <Icon name="arrow-up-right" size={12} />
            </a>
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-signal-deep"
            >
              Kembali ke atas
              <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-ink/30">
            Solution is Our Orientation
          </span>
          <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.28em] text-ink/30">
            <BrandMark className="h-4 w-4 text-signal/60" />
            Palembang · Indonesia
          </span>
        </div>
      </div>
    </footer>
  );
}
