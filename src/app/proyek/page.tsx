import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { PartnerMarquee } from "@/components/partner-marquee";
import { ProjectGallery } from "@/components/project-gallery";
import { SectionHeading } from "@/components/section-heading";
import { partners, projects, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Proyek & Rekam Jejak",
  description:
    "Rekam jejak CV. Sukses Aman Sejahtera pada proyek Jembatan Musi, Plant Gasing, IPAL Palembang, UIN Raden Fatah, Bendungan Rukoh, dan lainnya.",
  alternates: { canonical: "/proyek/" },
};

const locations = Array.from(
  new Set(projects.map((project) => project.location.split(",").pop()?.trim())),
).filter(Boolean);

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="Rekam Jejak"
        title={
          <>
            Kerja yang berbicara
            <br />
            lewat <span className="text-stroke-light">lokasi.</span>
          </>
        }
        description="Dari atas Sungai Musi sampai tanah Pidie. Ini sebagian proyek yang pernah kami dukung dalam pengadaan material dan perlengkapannya."
        meta={[
          { value: "10", label: "Proyek tercatat" },
          { value: "5", label: "Mitra kontraktor" },
          { value: "3", label: "Provinsi terjangkau" },
          { value: "2013", label: "Mulai melayani" },
        ]}
      >
        <a
          href={waLink(
            "Halo CV. Sukses Aman Sejahtera, saya ingin menanyakan pengadaan untuk proyek saya.",
          )}
          target="_blank"
          rel="noreferrer noopener"
          className="btn btn-signal group"
        >
          <Icon name="whatsapp" size={17} />
          Diskusi proyek
        </a>
      </PageHero>

      <section id="konten" className="section bg-paper">
        <div className="shell">
          <SectionHeading
            label="Portofolio"
            title={
              <>
                Lihat berdasarkan
                <br />
                jenis proyek.
              </>
            }
            description="Pilih kategori untuk memfilter. Klik kartu proyek untuk melihat ringkasan dukungan pengadaan dan detail lokasinya."
            action={
              <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-ink/35">
                <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                Klik kartu untuk detail
              </p>
            }
          />

          <div className="mt-12">
            <ProjectGallery />
          </div>
        </div>
      </section>

      <PartnerMarquee />

      <section className="section bg-sand">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="eyebrow text-smoke">Jangkauan</p>
              <h2 className="display-lg mt-6 max-w-md text-balance">
                Palembang,
                <br />
                dan jauh
                <br />
                <span className="text-stroke-dark">di luar itu.</span>
              </h2>
              <p className="body-base mt-6 max-w-sm text-smoke">
                Basis kami di Palembang, tetapi pengiriman proyek pernah
                menjangkau Aceh dan Lampung. Untuk lokasi baru, kami hitung
                dulu jalur dan waktu terbaiknya.
              </p>
              <a
                href={waLink(
                  "Halo, saya ingin menanyakan pengiriman ke lokasi proyek berikut:",
                )}
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-dark group mt-8"
              >
                Tanya pengiriman
                <Icon name="arrow-up-right" size={16} className="icon-arrow" />
              </a>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2">
              {locations.map((location, index) => (
                <div
                  key={location}
                  className="flex items-center justify-between gap-4 bg-paper px-5 py-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-display text-[10px] font-semibold tracking-[0.14em] text-ink/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-lg font-semibold tracking-[-0.025em]">
                      {location}
                    </span>
                  </div>
                  <Icon name="pin" size={15} className="text-signal" />
                </div>
              ))}
              <div className="flex items-center justify-between gap-4 bg-gradient-to-r from-signal to-signal-deep px-5 py-5 text-white sm:col-span-2">
                <p className="text-[12px] text-white/70">
                  Proyek berikutnya bisa jadi di lokasi Anda.
                </p>
                <a
                  href={waLink(
                    "Halo, saya ingin berdiskusi soal pengadaan untuk proyek di lokasi kami.",
                  )}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex shrink-0 items-center gap-1.5 text-[11px] font-bold text-white"
                >
                  Mulai
                  <Icon name="arrow-right" size={14} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-ink/15 pt-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/35">
              Registrated business partner
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-10 gap-y-5">
              {partners.map((partner) => (
                <span
                  key={partner.name}
                  className="font-display text-lg font-semibold tracking-[-0.02em] text-ink/45 sm:text-2xl"
                >
                  {partner.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Proyek Anda
            <br />
            berikutnya?
          </>
        }
        description="Kirim daftar kebutuhan dan lokasi proyek. Kami bantu cek ketersediaan, estimasi harga, dan opsi pengiriman."
      />
    </>
  );
}
