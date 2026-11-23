import Link from "next/link";
import { Icon } from "@/components/icons";
import { navigation, site, waLink } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[88vh] flex-col justify-center overflow-hidden bg-gradient-to-b from-sky via-[#f4f8ff] to-white pb-20 pt-28 text-ink sm:pt-32">
      <div className="blueprint absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        className="absolute -right-20 top-1/4 h-96 w-96 rounded-full bg-signal/10 blur-[130px]"
        aria-hidden="true"
      />
      <div className="shell relative">
        <p className="eyebrow text-signal">Halaman tidak ditemukan</p>
        <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-display text-[32vw] font-semibold leading-[0.75] tracking-[-0.08em] text-signal/[0.12] sm:text-[24vw] lg:text-[300px]">
              404
            </p>
            <h1 className="display-lg -mt-4 max-w-2xl text-balance text-ink sm:-mt-8">
              Sepertinya alamat ini
              <br />
              <span className="text-stroke-light">belum dibangun.</span>
            </h1>
          </div>
          <div className="max-w-sm lg:pb-3">
            <p className="body-base text-smoke">
              Halaman yang Anda cari tidak ada atau sudah berpindah. Kembali ke
              beranda, atau langsung hubungi kami kalau butuh penawaran.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/" className="btn btn-signal group">
                Ke beranda
                <Icon name="arrow-up-right" size={15} />
              </Link>
              <a
                href={waLink(
                  "Halo CV. Sukses Aman Sejahtera, saya ingin menanyakan kebutuhan pengadaan.",
                )}
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-outline group"
              >
                <Icon name="whatsapp" size={16} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-ink/10 pt-6">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-ink/35">
            Halaman lain
          </span>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[12px] font-semibold text-smoke transition-colors hover:text-signal-deep"
            >
              {item.label}
            </Link>
          ))}
          <span className="ml-auto hidden text-[9px] font-bold uppercase tracking-[0.2em] text-ink/25 sm:block">
            {site.name}
          </span>
        </div>
      </div>
    </section>
  );
}
