"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Brand } from "@/components/brand";
import { Icon } from "@/components/icons";
import { navigation, site, waLink } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] border-b transition-all duration-500 ${
          scrolled
            ? "border-ink/10 bg-white/95 shadow-[0_10px_40px_-28px_rgba(10,27,61,0.4)] backdrop-blur-xl"
            : "border-ink/[0.06] bg-white/80 backdrop-blur-lg"
        }`}
      >
        <div className="shell flex h-[72px] items-center justify-between gap-3 sm:h-[76px] sm:gap-6 lg:h-[86px]">
          <Brand />

          <nav aria-label="Navigasi utama" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navigation.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`group relative flex items-center gap-2 rounded-full px-3.5 py-2 text-[13px] font-semibold transition-colors duration-300 ${
                        active
                          ? "bg-sky text-signal-deep"
                          : "text-ink/55 hover:bg-sky/70 hover:text-ink"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full bg-signal transition-all duration-300 ${
                          active
                            ? "scale-100 opacity-100"
                            : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                        }`}
                      />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <span className="hidden items-center gap-2 pe-1 text-[10.5px] font-semibold text-ink/45 xl:flex">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              Siap menerima permintaan
            </span>

            <a
              href={waLink(
                "Halo CV. Sukses Aman Sejahtera, saya ingin menanyakan kebutuhan pengadaan untuk proyek saya.",
              )}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Hubungi lewat WhatsApp"
              className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-white text-signal shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-signal hover:bg-signal hover:text-white sm:h-11 sm:w-11"
            >
              <Icon name="whatsapp" size={17} />
            </a>

            <Link
              href="/kontak"
              className="group hidden items-center gap-2 rounded-full bg-signal px-5 py-3 text-[13px] font-bold leading-none text-white shadow-[0_10px_24px_-12px_rgba(28,91,255,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink sm:inline-flex"
            >
              Minta Penawaran
              <Icon
                name="arrow-up-right"
                size={15}
                className="icon-arrow"
              />
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
              className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-white text-ink transition-colors hover:bg-sky lg:hidden"
            >
              <Icon name={menuOpen ? "close" : "menu"} size={19} />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu navigasi"
          className="menu-in fixed inset-0 z-[110] flex flex-col overflow-y-auto bg-sky lg:hidden"
        >
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            aria-hidden="true"
          >
            <div className="blueprint absolute inset-0 opacity-70" />
            <div className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-signal/15 blur-[110px]" />
            <span className="absolute -bottom-10 -left-4 font-display text-[42vw] font-semibold leading-none tracking-[-0.08em] text-ink/[0.04]">
              SAS
            </span>
          </div>

          <div className="relative flex h-[76px] shrink-0 items-center justify-between bg-white/75 px-5 backdrop-blur-xl sm:px-8">
            <div onClick={() => setMenuOpen(false)}>
              <Brand />
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Tutup menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-white text-ink transition-colors hover:bg-signal hover:text-white"
            >
              <Icon name="close" size={19} />
            </button>
          </div>

          <div className="shell relative flex flex-1 flex-col justify-between pb-8 pt-5">
            <nav aria-label="Navigasi seluler">
              <ul className="border-t border-ink/10">
                {navigation.map((item, index) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <li
                      key={item.href}
                      className="menu-link-in border-b border-ink/10"
                      style={{ animationDelay: `${100 + index * 60}ms` }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="group flex items-center justify-between py-5"
                      >
                        <span className="flex items-baseline gap-4">
                          <span className="text-[10px] font-bold tracking-[0.18em] text-ink/30">
                            0{index + 1}
                          </span>
                          <span
                            className={`font-display text-[8.5vw] font-semibold tracking-[-0.04em] sm:text-5xl ${
                              active ? "text-signal" : "text-ink"
                            }`}
                          >
                            {item.label}
                          </span>
                        </span>
                        <Icon
                          name="arrow-up-right"
                          size={22}
                          className="text-ink/30 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-signal"
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-ink/35">
                  Hubungi kami
                </p>
                <a
                  href={waLink(
                    "Halo CV. Sukses Aman Sejahtera, saya ingin menanyakan kebutuhan pengadaan.",
                  )}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-3 flex items-center gap-2 text-lg font-semibold text-ink"
                >
                  <Icon name="whatsapp" size={18} className="text-signal" />
                  {site.phone}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2 flex items-center gap-2 break-all text-sm text-ink/55"
                >
                  <Icon name="mail" size={16} />
                  {site.email}
                </a>
              </div>
              <div className="sm:text-right">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-ink/35">
                  Kantor
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/55">
                  {site.address}
                </p>
              </div>
            </div>

            <Link
              href="/kontak"
              onClick={() => setMenuOpen(false)}
              className="btn btn-signal group mt-8 w-full"
            >
              Minta Penawaran
              <Icon name="arrow-up-right" size={16} className="icon-arrow" />
            </Link>

            <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/35">
                Sejak 2013
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/35">
                Palembang · Indonesia
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
