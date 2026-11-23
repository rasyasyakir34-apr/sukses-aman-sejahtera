import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Icon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import {
  faqs,
  mapsEmbed,
  mapsLink,
  site,
  waLink,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontak & Permintaan Penawaran",
  description:
    "Hubungi CV. Sukses Aman Sejahtera di Palembang untuk penawaran material, perlengkapan K3, dan kebutuhan proyek konstruksi. WhatsApp 0897-2070-777.",
  alternates: { canonical: "/kontak/" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Kontak"
        title={
          <>
            Mari bicara
            <br />
            soal <span className="text-stroke-light">proyek Anda.</span>
          </>
        }
        description="Daftar kebutuhan, pertanyaan spesifikasi, atau sekadar cek ketersediaan — mulai dari pesan singkat. Kami balas di jam kerja."
        meta={[
          { value: "WA", label: "Respon tercepat" },
          { value: "09–17", label: "Senin – Sabtu" },
          { value: "PLM", label: "Kantor Palembang" },
          { value: "ID", label: "Pengiriman nasional" },
        ]}
      >
        <a
          href={waLink(
            "Halo CV. Sukses Aman Sejahtera, saya ingin menanyakan kebutuhan pengadaan.",
          )}
          target="_blank"
          rel="noreferrer noopener"
          className="btn btn-signal group"
        >
          <Icon name="whatsapp" size={17} />
          Chat sekarang
        </a>
      </PageHero>

      <section
        id="konten"
        className="section bg-paper"
      >
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14">
            <div>
              <p className="eyebrow text-smoke">Hubungi kami</p>
              <h2 className="display-lg mt-6 max-w-md text-balance">
                Satu pesan,
                <br />
                kami cek.
              </h2>
              <p className="body-base mt-6 max-w-md text-smoke">
                Untuk penawaran yang lebih cepat, sertakan nama item,
                spesifikasi, volume, dan lokasi proyek. Kalau belum lengkap,
                kirim saja dulu — kami bantu lengkapi.
              </p>

              <div className="mt-9 grid gap-3">
                <a
                  href={waLink(
                    "Halo CV. Sukses Aman Sejahtera, saya ingin menanyakan kebutuhan pengadaan untuk proyek saya.",
                  )}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-center justify-between gap-4 rounded-2xl bg-gradient-to-br from-signal to-signal-deep p-5 text-white shadow-[0_20px_40px_-24px_rgba(28,91,255,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-22px_rgba(28,91,255,0.9)] sm:gap-5 sm:p-6"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/20">
                      <Icon name="whatsapp" size={22} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/70">
                        WhatsApp — respon tercepat
                      </p>
                      <p className="mt-1 font-display text-xl font-semibold tracking-[-0.03em] sm:text-2xl">
                        {site.phone}
                      </p>
                    </div>
                  </div>
                  <Icon
                    name="arrow-up-right"
                    size={20}
                    className="arrow-shift shrink-0"
                  />
                </a>

                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-ink/10 bg-sand p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-signal/40 hover:shadow-[0_18px_40px_-32px_rgba(10,27,61,0.5)] sm:gap-5 sm:p-6"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-paper">
                      <Icon name="mail" size={20} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-ink/40">
                        Email
                      </p>
                      <p className="mt-1 break-all font-display text-[17px] font-semibold tracking-[-0.02em] sm:text-xl">
                        {site.email}
                      </p>
                    </div>
                  </div>
                  <Icon
                    name="arrow-up-right"
                    size={20}
                    className="arrow-shift shrink-0"
                  />
                </a>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-ink/10 p-5">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-signal text-white">
                      <Icon name="pin" size={17} />
                    </span>
                    <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.18em] text-ink/35">
                      Kantor
                    </p>
                    <p className="mt-2 text-[13px] leading-relaxed text-ink/70">
                      {site.address}
                    </p>
                    <a
                      href={mapsLink}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold text-signal-deep"
                    >
                      Buka peta
                      <Icon name="arrow-up-right" size={12} />
                    </a>
                  </div>

                  <div className="rounded-2xl border border-ink/10 p-5">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-signal text-white">
                      <Icon name="clock" size={17} />
                    </span>
                    <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.18em] text-ink/35">
                      Jam kerja
                    </p>
                    <p className="mt-2 text-[13px] leading-relaxed text-ink/70">
                      {site.hours}
                    </p>
                    <p className="mt-3 text-[11px] leading-relaxed text-ink/35">
                      {site.hoursNote}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-sand py-16 sm:py-20">
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-[0.58fr_1.42fr] lg:items-center">
            <div>
              <p className="eyebrow text-smoke">Lokasi kantor</p>
              <h2 className="display-md mt-5 max-w-sm text-balance">
                Ilir Timur II,
                <br />
                Palembang.
              </h2>
              <p className="mt-5 max-w-sm text-[13px] leading-relaxed text-smoke">
                {site.address}
              </p>
              <a
                href={mapsLink}
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-dark group mt-6"
              >
                Petunjuk arah
                <Icon
                  name="arrow-up-right"
                  size={16}
                  className="icon-arrow"
                />
              </a>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-ink/10 bg-paper">
              <iframe
                src={mapsEmbed}
                title="Peta lokasi kantor CV. Sukses Aman Sejahtera"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[320px] w-full grayscale-[0.35] sm:h-[380px]"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ink/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="eyebrow text-smoke">Pertanyaan umum</p>
              <h2 className="display-lg mt-6 max-w-sm text-balance">
                Sebelum
                <br />
                bertanya.
              </h2>
              <p className="body-base mt-6 max-w-sm text-smoke">
                Beberapa hal yang paling sering ditanyakan. Kalau belum
                terjawab, WhatsApp kami terbuka.
              </p>
              <a
                href={waLink(
                  "Halo CV. Sukses Aman Sejahtera, saya punya pertanyaan yang belum ada di FAQ.",
                )}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-7 inline-flex items-center gap-2 text-[12px] font-bold text-signal-deep"
              >
                Tanya langsung
                <Icon name="arrow-up-right" size={14} />
              </a>
            </div>

            <div>
              {faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  open={index === 0}
                  className="faq-item border-t border-ink/15 last:border-b"
                >
                  <summary className="group flex items-center justify-between gap-4 py-5 sm:gap-6 sm:py-6">
                    <span className="faq-question font-display text-[18px] font-semibold leading-snug tracking-[-0.025em] text-ink transition-colors sm:text-[22px]">
                      {faq.question}
                    </span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-ink/15 transition-colors group-hover:border-signal group-hover:bg-signal group-hover:text-white">
                      <Icon
                        name="plus"
                        size={14}
                        className="faq-icon transition-transform duration-300"
                      />
                    </span>
                  </summary>
                  <p className="max-w-2xl pb-6 pr-10 text-[13px] leading-relaxed text-smoke">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
