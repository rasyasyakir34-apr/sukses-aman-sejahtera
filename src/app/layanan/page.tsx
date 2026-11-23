import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import {
  categories,
  processSteps,
  waLink,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Layanan & Kategori Pengadaan",
  description:
    "Kategori pengadaan CV. Sukses Aman Sejahtera: material bangunan, geotextile, perlengkapan K3, elektrikal, power tools, engine, alat laboratorium sipil, ATK, dan komputer.",
  alternates: { canonical: "/layanan/" },
};

const support = [
  {
    icon: "shield" as const,
    title: "Verifikasi spesifikasi",
    description:
      "Merek, tipe, ukuran, dan standar dicek sebelum pesanan jalan. Kami tanyakan hal yang sering terlewat di awal.",
  },
  {
    icon: "package" as const,
    title: "Koordinasi pengiriman",
    description:
      "Jadwal dan titik pengiriman disepakati bersama. Untuk volume besar, pasokan bisa diatur mengikuti tahapan pekerjaan.",
  },
  {
    icon: "layers" as const,
    title: "Dokumen pengadaan",
    description:
      "Penawaran, invoice, dan surat jalan disiapkan rapi. Kebutuhan dokumen tambahan didiskusikan sejak awal.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Layanan & Pengadaan"
        title={
          <>
            Sepuluh kategori.
            <br />
            <span className="text-stroke-light">Satu pintu.</span>
          </>
        }
        description="Dari material curah sampai alat laboratorium. Pilih kategori untuk melihat cakupan item — atau langsung kirim daftar kebutuhan Anda."
        meta={[
          { value: "10", label: "Kategori pengadaan" },
          { value: "01", label: "Titik kontak" },
          { value: "13+", label: "Tahun pengalaman" },
          { value: "ID", label: "Jangkauan pengiriman" },
        ]}
      >
        <a
          href={waLink(
            "Halo CV. Sukses Aman Sejahtera, saya ingin menanyakan kategori pengadaan berikut:",
          )}
          target="_blank"
          rel="noreferrer noopener"
          className="btn btn-signal group"
        >
          <Icon name="whatsapp" size={17} />
          Tanya kategori
        </a>
      </PageHero>

      <section id="konten" className="section bg-paper">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
            <div className="order-last lg:order-first lg:sticky lg:top-32 lg:self-start">
              <p className="eyebrow text-smoke">Katalog pengadaan</p>
              <h2 className="display-lg mt-6 max-w-sm text-balance">
                Cari berdasarkan
                <br />
                kebutuhan.
              </h2>
              <p className="body-base mt-6 max-w-sm text-smoke">
                Daftar ini adalah titik awal. Spesifikasi, volume, dan merek
                tetap bisa disesuaikan dengan kebutuhan proyek Anda.
              </p>

              <div className="mt-8 rounded-2xl border border-ink/10 bg-sand p-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-ink/40">
                  Tidak menemukan item?
                </p>
                <p className="mt-2 font-display text-xl font-semibold leading-tight tracking-[-0.03em]">
                  Kirim spesifikasinya. Kami bantu carikan.
                </p>
                <a
                  href={waLink(
                    "Halo CV. Sukses Aman Sejahtera, saya butuh item yang tidak ada di katalog. Berikut spesifikasinya:",
                  )}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold text-signal-deep"
                >
                  Pengadaan khusus
                  <Icon name="arrow-up-right" size={14} />
                </a>
              </div>

              <div className="mt-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-ink/35">
                <span className="h-px w-7 bg-signal" />
                10 kategori terdaftar
              </div>
            </div>

            <div>
              {categories.map((category, index) => (
                <details
                  key={category.slug}
                  id={category.slug}
                  open={index === 0}
                  data-reveal
                  style={
                    { "--reveal-delay": `${index * 40}ms` } as React.CSSProperties
                  }
                  className="faq-item group scroll-mt-28 border-t border-ink/15 last:border-b"
                >
                  <summary className="group flex items-center gap-3 py-5 sm:gap-6 sm:py-7">
                    <span className="w-6 shrink-0 font-display text-[11px] font-semibold tracking-[0.12em] text-ink/35 sm:w-7">
                      {category.number}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="faq-question block font-display text-[21px] font-semibold leading-[1.1] tracking-[-0.03em] text-ink transition-colors duration-300 sm:text-[28px]">
                        {category.title}
                      </span>
                      <span className="mt-1.5 block text-[12px] leading-relaxed text-smoke sm:text-[13px]">
                        {category.short}
                      </span>
                    </span>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/15 text-ink transition-colors group-hover:border-signal group-hover:bg-signal group-hover:text-white sm:h-10 sm:w-10">
                      <Icon
                        name="plus"
                        size={15}
                        className="faq-icon transition-transform duration-300"
                      />
                    </span>
                  </summary>

                  <div className="grid gap-6 pb-8 pl-11 sm:grid-cols-[1.15fr_0.85fr] sm:gap-10 sm:pl-[52px] sm:pr-14">
                    <p className="text-[13px] leading-relaxed text-smoke sm:text-sm">
                      {category.description}
                    </p>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-ink/35">
                        Cakupan item
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-1.5">
                        {category.items.map((item) => (
                          <li
                            key={item}
                            className="rounded-full border border-ink/12 px-2.5 py-1.5 text-[10.5px] font-medium leading-none text-ink/70"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </details>
              ))}

              <div className="mt-8 rounded-2xl bg-gradient-to-br from-signal to-signal-deep p-6 text-white sm:flex sm:items-center sm:justify-between sm:gap-6">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/60">
                    Daftar belum lengkap?
                  </p>
                  <p className="mt-2 font-display text-xl font-semibold tracking-[-0.03em]">
                    Ceritakan kebutuhan proyek Anda.
                  </p>
                </div>
                <a
                  href={waLink(
                    "Halo CV. Sukses Aman Sejahtera, saya ingin berkonsultasi soal kebutuhan pengadaan proyek.",
                  )}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-bold text-signal-deep transition-colors duration-300 hover:bg-ink hover:text-white sm:mt-0 sm:w-fit sm:shrink-0"
                >
                  Hubungi kami
                  <Icon
                    name="arrow-up-right"
                    size={15}
                    className="icon-arrow"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="shell">
          <SectionHeading
            label="Lebih dari barang"
            title={
              <>
                Yang ikut kami
                <br />
                tanggung.
              </>
            }
            description="Pengadaan yang baik bukan cuma soal barang sampai. Tiga hal ini yang membuat prosesnya terasa lebih ringan di sisi Anda."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {support.map((item, index) => (
              <article
                key={item.title}
                data-reveal
                style={
                  { "--reveal-delay": `${index * 80}ms` } as React.CSSProperties
                }
                className="group rounded-2xl border border-ink/10 bg-white p-6 transition-colors duration-300 hover:border-signal/40 sm:p-7"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-signal text-white transition-colors duration-300 group-hover:bg-ink">
                  <Icon name={item.icon} size={20} />
                </span>
                <h3 className="mt-8 font-display text-[24px] font-semibold leading-tight tracking-[-0.03em]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-smoke">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-sky">
        <div className="shell">
          <SectionHeading
            label="Cara memulai"
            title={
              <>
                Lima langkah.
                <br />
                Tanpa drama.
              </>
            }
            description="Satu pesan WhatsApp berisi daftar kebutuhan sudah cukup untuk memulai. Kami akan memandu langkah berikutnya."
          />

          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <li
                key={step.number}
                data-reveal
                style={
                  { "--reveal-delay": `${index * 70}ms` } as React.CSSProperties
                }
                className="group rounded-2xl border border-ink/10 bg-white p-6 transition-colors duration-300 hover:border-signal/40"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-sky font-display text-[11px] font-semibold tracking-[0.06em] text-signal transition-colors duration-300 group-hover:bg-signal group-hover:text-white">
                  {step.number}
                </span>
                <h3 className="mt-8 font-display text-[20px] font-semibold leading-tight tracking-[-0.03em] text-ink">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[12px] leading-relaxed text-smoke">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Kebutuhan Anda
            <br />
            belum ada di daftar?
          </>
        }
        description="Justru itu yang paling sering kami bantu. Kirim spesifikasi atau foto barangnya, kami cek sumber pasokan yang paling masuk akal."
      />
    </>
  );
}
