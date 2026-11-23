import Link from "next/link";
import { Icon } from "@/components/icons";
import { site, waLink } from "@/lib/site";

export function CtaBand({
  title = (
    <>
      Siap kirim
      <br />
      daftar kebutuhan?
    </>
  ),
  description = "Kirim daftar item, spesifikasi, dan lokasi proyek. Tim kami akan bantu cek ketersediaan dan menyiapkan penawaran.",
}: {
  title?: React.ReactNode;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-signal via-signal to-signal-deep text-white">
      <div className="dot-grid absolute inset-0 opacity-30" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 h-80 w-80 rounded-full border-[40px] border-white/10"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full border-[30px] border-white/[0.08]"
      />
      <div
        aria-hidden="true"
        className="absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-cyan-300/20 blur-[90px]"
      />

      <div className="shell relative py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div>
            <p className="eyebrow text-white/60">Mulai dari daftar kebutuhan</p>
            <h2 className="display-lg mt-6 max-w-[700px] text-balance text-white">
              {title}
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-sm text-[15px] leading-relaxed text-white/75">
              {description}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={waLink(
                  "Halo CV. Sukses Aman Sejahtera, saya ingin mengirim daftar kebutuhan pengadaan untuk proyek saya.",
                )}
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-light group"
              >
                <Icon name="whatsapp" size={17} />
                Kirim via WhatsApp
              </a>
              <Link href="/kontak" className="btn btn-outline-light group">
                Form permintaan
                <Icon
                  name="arrow-up-right"
                  size={16}
                  className="icon-arrow"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 border-t border-white/20 pt-6 text-[12px] font-semibold sm:grid-cols-3">
          <a
            href={`tel:${site.phoneRaw}`}
            className="flex items-center gap-2.5 transition-opacity hover:opacity-70"
          >
            <Icon name="phone" size={15} />
            {site.phone}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-2.5 break-all transition-opacity hover:opacity-70"
          >
            <Icon name="mail" size={15} />
            {site.email}
          </a>
          <p className="flex items-center gap-2.5 sm:justify-end">
            <Icon name="clock" size={15} />
            {site.hours}
          </p>
        </div>
      </div>
    </section>
  );
}
