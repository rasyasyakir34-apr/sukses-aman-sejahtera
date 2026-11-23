import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import {
  partners,
  site,
  stats,
  values,
  waLink,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "CV. Sukses Aman Sejahtera adalah general supplier di Palembang yang melayani pengadaan proyek konstruksi sejak 2013.",
  alternates: { canonical: "/tentang/" },
};

const focus = [
  {
    title: "Proyek infrastruktur",
    description:
      "Jembatan, jalan, bendungan, kawasan, dan fasilitas publik yang menjadi tulang punggung daerah.",
  },
  {
    title: "Kontraktor & pemilik proyek",
    description:
      "Dukungan pengadaan untuk tim proyek yang butuh kepastian spesifikasi dan jadwal pengiriman.",
  },
  {
    title: "Operasional lapangan",
    description:
      "Kebutuhan harian proyek — dari perlengkapan K3 sampai alat tulis dan perangkat kerja digital.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="Tentang Kami"
        title={
          <>
            Tumbuh bersama
            <br />
            proyek yang membangun
            <br />
            <span className="text-stroke-light">daerah.</span>
          </>
        }
        description="General supplier yang berbasis di Palembang. Sejak 2013, kami membantu menjaga pasokan proyek tetap bergerak — dari material sampai perlengkapan kecil yang sering terlupakan."
        meta={stats.map((stat) => ({
          value: `${stat.value}${stat.suffix}`,
          label: stat.label,
        }))}
      />

      <div id="konten" />

      <section className="section bg-paper">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="eyebrow text-smoke">Cerita kami</p>
              <h2 className="display-lg mt-6 max-w-md text-balance">
                Pengadaan yang
                <br />
                terasa manusiawi.
              </h2>
              <p className="body-base mt-6 max-w-sm text-smoke">
                Kami percaya pekerjaan supplier bukan sekadar memindahkan
                barang dari satu gudang ke gudang lain. Ada proyek, jadwal, dan
                orang-orang yang menunggu di ujungnya.
              </p>

              <div className="mt-9 flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-signal text-white">
                  <Icon name="arrow-up-right" size={18} />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink/40">
                    Sejak
                  </p>
                  <p className="font-display text-2xl font-semibold tracking-[-0.03em]">
                    2013
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="grid gap-6 text-smoke sm:grid-cols-2 sm:gap-8">
                <p className="body-lg">
                  <strong className="font-semibold text-ink">
                    CV. Sukses Aman Sejahtera
                  </strong>{" "}
                  hadir untuk mendukung kelangsungan penyelesaian proyek daerah
                  dan kota. Kami telah berpengalaman sejak 2013 dalam
                  pengadaan berbagai klasifikasi item untuk kebutuhan
                  konstruksi sipil dan infrastruktur.
                </p>
                <p className="body-lg">
                  Mulai dari bahan bangunan dan material penimbunan, lapisan
                  geotextile dan membrane, perlengkapan K3, listrik dan
                  elektronik, power tools, engine dan diesel, alat laboratorium
                  teknik sipil, alat tulis kantor, sampai komputer beserta
                  perlengkapannya.
                </p>
              </div>

              <div className="mt-10 grid gap-6 border-t border-ink/15 pt-8 sm:grid-cols-3">
                {focus.map((item) => (
                  <div key={item.title}>
                    <span className="mb-4 block h-px w-8 bg-signal" />
                    <h3 className="font-display text-lg font-semibold tracking-[-0.025em]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-smoke">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="clip-notch-sm relative aspect-[4/3] overflow-hidden bg-sand">
                  <Image
                    src="/images/2.jpg"
                    alt="Pembangunan gedung UIN Raden Fatah Palembang"
                    fill
                    sizes="(max-width: 768px) 45vw, 25vw"
                    className="object-cover saturate-[0.8]"
                  />
                </div>
                <div className="clip-notch-sm relative aspect-[4/3] overflow-hidden bg-sand">
                  <Image
                    src="/images/4.jpg"
                    alt="Pembangunan Plant Gasing Banyuasin"
                    fill
                    sizes="(max-width: 768px) 45vw, 25vw"
                    className="object-cover saturate-[0.8]"
                  />
                </div>
              </div>

              <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.16em] text-ink/35">
                Dokumentasi proyek — Palembang &amp; sekitarnya
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-sky">
        <div className="relative">
          <div className="shell">
            <SectionHeading
              label="Cara kami bekerja"
              title={
                <>
                  Komitmen yang
                  <br />
                  bisa dicek.
                </>
              }
              description="Bukan janji besar di halaman profil. Ini hal-hal kecil yang kami jaga supaya proyek Anda tidak kehilangan momentum."
            />

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {values.map((value, index) => (
                <article
                  key={value.number}
                  data-reveal
                  data-spotlight
                  style={
                    {
                      "--reveal-delay": `${index * 70}ms`,
                    } as React.CSSProperties
                  }
                  className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-white p-6 transition-colors duration-500 hover:border-signal/40 sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-display text-[11px] font-semibold tracking-[0.16em] text-ink/30 transition-colors group-hover:text-signal">
                      {value.number}
                    </span>
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-sky text-signal transition-colors duration-500 group-hover:bg-signal group-hover:text-white">
                      <Icon name={value.icon} size={19} />
                    </span>
                  </div>
                  <h3 className="mt-10 font-display text-[26px] font-semibold leading-tight tracking-[-0.035em] text-ink sm:mt-14">
                    {value.title}
                  </h3>
                  <p className="mt-3 max-w-md text-[13px] leading-relaxed text-smoke">
                    {value.description}
                  </p>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-10 -right-6 font-display text-[120px] font-semibold leading-none tracking-[-0.08em] text-signal/[0.05]"
                  >
                    {value.number}
                  </span>
                </article>
              ))}
            </div>

            <div className="mt-6 grid gap-6 rounded-2xl border border-ink/10 bg-white px-6 py-7 sm:grid-cols-[1fr_auto] sm:items-center sm:px-8">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-ink/40">
                  Kategori yang kami tangani
                </p>
                <p className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em] text-ink sm:text-3xl">
                  10 kategori. Satu pintu.
                </p>
              </div>
              <Link
                href="/layanan"
                className="btn btn-signal group w-full sm:w-fit"
              >
                Lihat layanan
                <Icon name="arrow-right" size={16} className="icon-arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section bg-paper">
        <div className="shell">
          <SectionHeading
            label="Mitra usaha"
            title={
              <>
                Dipercaya oleh
                <br />
                nama-nama besar.
              </>
            }
            description="Kami terdaftar sebagai mitra usaha dan telah terlibat dalam proyek yang dikerjakan bersama sejumlah kontraktor nasional."
          />

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-5">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                data-reveal
                style={
                  { "--reveal-delay": `${index * 50}ms` } as React.CSSProperties
                }
                className="group flex min-h-[150px] flex-col justify-between bg-paper p-5 transition-colors duration-300 hover:bg-sand"
              >
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-ink/30">
                  Mitra {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[17px] font-semibold leading-tight tracking-[-0.02em] text-ink/65 transition-colors group-hover:text-ink sm:text-lg">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-5 rounded-2xl bg-sand p-6 sm:grid-cols-[1.2fr_0.8fr] sm:items-center sm:p-8">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-ink/40">
                Afiliasi korporat
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
                {site.affiliate.name}
              </h3>
              <p className="mt-2 max-w-md text-[13px] leading-relaxed text-smoke">
                Bagian dari jaringan usaha kami untuk kebutuhan atap dan
                material bangunan.
              </p>
            </div>
            <a
              href={site.affiliate.url}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-dark group w-fit sm:justify-self-end"
            >
              Kunjungi situs
              <Icon name="arrow-up-right" size={16} className="icon-arrow" />
            </a>
          </div>
        </div>
      </section>

      {/* Motto */}
      <section className="relative overflow-hidden border-y border-ink/10 bg-cloud py-16 sm:py-20">
        <div className="blueprint absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="shell relative">
          <p className="eyebrow text-smoke">Motto kami</p>
          <p className="mt-6 max-w-5xl font-display text-[9.5vw] font-semibold leading-[0.95] tracking-[-0.055em] text-ink sm:text-[64px] lg:text-[84px]">
            “Solution is Our
            <br />
            <span className="text-signal">Orientation.”</span>
          </p>
          <div className="mt-8 flex flex-col gap-3 border-t border-ink/15 pt-5 text-[12px] font-semibold sm:flex-row sm:items-center sm:justify-between">
            <p className="text-smoke">
              Solusi dulu, bukan alasan. Sejak 2013.
            </p>
            <a
              href={waLink(
                "Halo CV. Sukses Aman Sejahtera, saya ingin berdiskusi soal kebutuhan proyek.",
              )}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 font-bold text-signal-deep"
            >
              Mulai diskusi
              <Icon name="arrow-up-right" size={15} />
            </a>
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Kenalan dulu,
            <br />
            urusan berikutnya.
          </>
        }
        description="Kalau Anda sedang menyiapkan RAB atau butuh supplier untuk proyek berikutnya, kami senang mulai dari percakapan singkat."
      />
    </>
  );
}
