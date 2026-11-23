import Image from "next/image";
import Link from "next/link";
import { CountUp } from "@/components/count-up";
import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icons";
import { PartnerMarquee } from "@/components/partner-marquee";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import {
  categories,
  featuredProjects,
  heroImage,
  processSteps,
  site,
  stats,
  values,
  waLink,
} from "@/lib/site";

const homeCategories = [0, 1, 2, 3, 4, 6].map((index) => categories[index]);

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#e9f2ff] via-[#f7faff] to-[#dcecff] pb-10 pt-24 sm:pt-32 lg:pb-16 lg:pt-40">
        <div className="blueprint absolute inset-0 opacity-90" aria-hidden="true" />
        <div
          className="absolute -right-40 top-10 h-[560px] w-[560px] rounded-full bg-signal/12 blur-[130px]"
          aria-hidden="true"
        />
        <div
          className="absolute -left-52 bottom-0 h-[380px] w-[380px] rounded-full bg-cyan-300/30 blur-[110px]"
          aria-hidden="true"
        />

        <div className="shell relative">
          <div className="grid items-center gap-10 lg:grid-cols-[1.06fr_0.94fr] lg:gap-14">
            <div>
              <div className="flex flex-wrap items-center gap-2" data-reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-signal px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_8px_20px_-12px_rgba(28,91,255,0.9)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
                  General Supplier
                </span>
                <span className="rounded-full border border-ink/10 bg-white/75 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-ink/55 backdrop-blur-sm">
                  Palembang
                </span>
                <span className="rounded-full border border-ink/10 bg-white/75 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-ink/55 backdrop-blur-sm">
                  Sejak 2013
                </span>
              </div>

              <h1
                className="display-xl mt-7 text-ink"
                aria-label="Material tepat. Proyek jalan."
                data-reveal
              >
                <span className="block">Material</span>
                <span className="block">
                  tepat<span className="text-signal">.</span>
                </span>
                <span className="block">
                  Proyek{" "}
                  <span className="text-stroke-light">jalan.</span>
                </span>
              </h1>

              <p
                className="body-lg mt-7 max-w-[500px] text-smoke"
                data-reveal
                style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
              >
                Kami memasok material, perlengkapan K3, alat teknik, dan
                kebutuhan proyek konstruksi — dari Palembang untuk proyek yang
                tidak boleh berhenti.
              </p>

              <div
                className="mt-8 flex flex-wrap items-center gap-3"
                data-reveal
                style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
              >
                <a
                  href={waLink(
                    "Halo CV. Sukses Aman Sejahtera, saya ingin menanyakan kebutuhan pengadaan untuk proyek saya.",
                  )}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn btn-signal group"
                >
                  <Icon name="whatsapp" size={17} />
                  Minta Penawaran
                </a>
                <Link href="/proyek" className="btn btn-outline group">
                  Lihat Rekam Jejak
                  <Icon
                    name="arrow-up-right"
                    size={16}
                    className="icon-arrow"
                  />
                </Link>
              </div>

              <div
                className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3"
                data-reveal
                style={{ "--reveal-delay": "280ms" } as React.CSSProperties}
              >
                <div className="flex items-center gap-2">
                  <span className="flex gap-0.5 text-[13px] leading-none text-sun">
                    {"★★★★★".split("").map((star, index) => (
                      <span key={index}>{star}</span>
                    ))}
                  </span>
                  <span className="text-[11px] font-bold text-ink">
                    {site.rating.score}
                  </span>
                  <span className="text-[11px] text-smoke">
                    · {site.rating.count} ulasan
                  </span>
                </div>
                <span className="hidden h-3 w-px bg-ink/15 sm:block" />
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-ink/40">
                  Solution is Our Orientation
                </span>
              </div>
            </div>

            <div
              className="relative mx-auto w-full max-w-[460px] lg:max-w-none"
              data-reveal
              style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
            >
              <div
                aria-hidden="true"
                className="absolute -right-3 -top-3 h-full w-full rounded-[30px] border-2 border-signal/20"
              />

              <div className="relative overflow-hidden rounded-[28px] border-[6px] border-white bg-steel shadow-[0_40px_80px_-40px_rgba(10,27,61,0.45)] sm:border-8">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={heroImage}
                    alt="Pekerjaan Jembatan Musi IV di atas Sungai Musi, Palembang"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 42vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-signal-deep/60 via-transparent to-white/10" />
                </div>

                <div className="absolute inset-x-4 top-4 flex items-center justify-between">
                  <span className="rounded-full border border-white/35 bg-white/20 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md">
                    Dokumentasi proyek
                  </span>
                  <span className="rounded-full bg-white/20 px-2.5 py-1.5 font-display text-[10px] font-semibold text-white backdrop-blur-md">
                    01 / 10
                  </span>
                </div>

                <div className="absolute inset-x-5 bottom-5">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/75">
                    Jembatan · Palembang
                  </p>
                  <p className="mt-1.5 font-display text-xl font-semibold tracking-[-0.03em] text-white">
                    Jembatan Musi IV
                  </p>
                </div>
              </div>

              <div className="relative z-10 -mt-6 ml-4 w-fit rounded-2xl bg-signal px-5 py-4 text-white shadow-[0_20px_40px_-20px_rgba(28,91,255,0.9)] sm:absolute sm:-bottom-7 sm:-left-6 sm:ml-0 sm:px-6 sm:py-5">
                <p className="font-display text-4xl font-semibold leading-none tracking-[-0.05em] sm:text-5xl">
                  13<span className="text-xl text-white/60 sm:text-2xl">+</span>
                </p>
                <p className="mt-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-white/65">
                  Tahun melayani
                </p>
              </div>

              <div className="absolute -right-3 top-8 hidden rounded-2xl border border-ink/5 bg-white/95 px-4 py-3 shadow-[0_18px_40px_-20px_rgba(10,27,61,0.5)] backdrop-blur sm:block">
                <p className="flex items-center gap-1 text-[11px] font-bold text-ink">
                  <span className="text-sun">★</span> {site.rating.score}
                  <span className="font-medium text-smoke">
                    ({site.rating.count})
                  </span>
                </p>
                <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.14em] text-ink/35">
                  Ulasan pelanggan
                </p>
              </div>
            </div>
          </div>

          <div
            className="mt-12 overflow-hidden rounded-2xl border border-ink/[0.07] bg-white/80 shadow-[0_20px_50px_-36px_rgba(10,27,61,0.5)] backdrop-blur-sm lg:mt-16"
            data-reveal
          >
            <div className="grid grid-cols-2 gap-px bg-ink/[0.06] sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white/95 px-5 py-4 sm:px-6 sm:py-5">
                  <p className="font-display text-2xl font-semibold tracking-[-0.04em] text-signal-deep sm:text-3xl">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1.5 text-[9px] font-bold uppercase leading-snug tracking-[0.14em] text-ink/40 sm:text-[10px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PartnerMarquee />

      {/* ── About ────────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="eyebrow text-smoke">01 — Tentang Kami</p>

              <div className="relative mt-8 max-w-[340px]">
                <div
                  aria-hidden="true"
                  className="absolute -left-3 -top-3 h-full w-full rounded-2xl bg-sky"
                />
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-4 border-white bg-sand shadow-[0_24px_50px_-30px_rgba(10,27,61,0.5)]">
                  <Image
                    src="/images/1.jpg"
                    alt="Pekerjaan tanah di proyek Bendungan Rukoh, Pidie, Aceh"
                    fill
                    sizes="(max-width: 1024px) 80vw, 28vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
                  <p className="absolute inset-x-4 bottom-4 text-[9px] font-bold uppercase leading-relaxed tracking-[0.14em] text-white">
                    Bendungan Rukoh
                    <br />
                    <span className="font-medium text-white/70">
                      Pidie, Aceh
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-6 flex max-w-[340px] items-center justify-between border-t border-ink/10 pt-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink/40">
                  Berdiri sejak
                </span>
                <span className="font-display text-xl font-semibold tracking-[-0.03em] text-ink">
                  2013
                </span>
              </div>
            </div>

            <div>
              <h2 className="display-lg max-w-[760px] text-balance text-ink" data-reveal>
                Bukan sekadar supplier. Kami bagian dari ritme proyek Anda.
              </h2>

              <div
                className="mt-8 grid gap-6 text-smoke sm:grid-cols-2 sm:gap-8"
                data-reveal
                style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
              >
                <p className="body-base">
                  Indonesia bergerak lewat proyek yang selesai tepat waktu.
                  Sejak 2013,{" "}
                  <strong className="font-semibold text-ink">
                    CV. Sukses Aman Sejahtera
                  </strong>{" "}
                  hadir untuk mendukung penyelesaian proyek daerah dan kota —
                  mulai dari jembatan dan gedung sampai kawasan dan bendungan.
                </p>
                <p className="body-base">
                  Kami tidak berhenti di “barangnya ada”. Spesifikasi dicek,
                  sumber pasokan ditelusuri, dan pengiriman diatur agar
                  kebutuhan lapangan datang sesuai urutan pekerjaan. Itulah
                  arti motto kami:{" "}
                  <em className="not-italic text-ink">
                    Solution is Our Orientation.
                  </em>
                </p>
              </div>

              <div
                className="mt-9 flex flex-wrap gap-2"
                data-reveal
                style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
              >
                {[
                  "Bahan bangunan",
                  "Geosintetik",
                  "K3",
                  "Elektrikal",
                  "Alat teknik",
                  "Laboratorium sipil",
                  "ATK & komputer",
                ].map((item) => (
                  <span key={item} className="chip bg-white">
                    {item}
                  </span>
                ))}
                <Link
                  href="/layanan"
                  className="chip border-signal/20 bg-signal text-white transition-colors hover:bg-ink"
                >
                  +3 kategori lain
                  <Icon name="arrow-right" size={12} />
                </Link>
              </div>

              <div
                className="mt-10 grid gap-4 sm:grid-cols-3"
                data-reveal
                style={{ "--reveal-delay": "220ms" } as React.CSSProperties}
              >
                {[
                  { icon: "boxes" as const, label: "10 kategori", text: "pengadaan" },
                  { icon: "shield" as const, label: "5 mitra", text: "kontraktor nasional" },
                  { icon: "package" as const, label: "1 titik kontak", text: "untuk semua kebutuhan" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-ink/[0.07] bg-cloud px-4 py-4"
                  >
                    <Icon name={item.icon} size={18} className="text-signal" />
                    <p className="mt-3 text-[13px] font-bold text-ink">
                      {item.label}
                    </p>
                    <p className="text-[11px] text-smoke">{item.text}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/tentang"
                className="group mt-10 inline-flex items-center gap-2 text-sm font-bold text-ink"
              >
                <span className="underline-sweep">Kenali perusahaan kami</span>
                <span className="grid h-8 w-8 place-items-center rounded-full border border-ink/15 bg-white transition-colors duration-300 group-hover:border-signal group-hover:bg-signal group-hover:text-white">
                  <Icon name="arrow-up-right" size={14} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────── */}
      <section className="section bg-sky">
        <div className="shell">
          <SectionHeading
            label="02 — Layanan"
            title={
              <>
                Satu pintu untuk
                <br />
                kebutuhan proyek.
              </>
            }
            description="Sepuluh kategori pengadaan yang saling melengkapi. Kalau itemnya tidak ada di daftar, tetap tanyakan — biasanya justru di situ kami bisa bantu paling banyak."
            action={
              <Link href="/layanan" className="btn btn-dark group">
                Lihat semua kategori
                <Icon name="arrow-right" size={16} className="icon-arrow" />
              </Link>
            }
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {homeCategories.map((category, index) => (
              <Link
                key={category.slug}
                href={`/layanan#${category.slug}`}
                data-reveal
                data-spotlight
                style={
                  { "--reveal-delay": `${index * 60}ms` } as React.CSSProperties
                }
                className="service-card group relative flex min-h-[220px] flex-col overflow-hidden rounded-2xl border border-ink/[0.07] bg-white p-6 shadow-[0_16px_40px_-34px_rgba(10,27,61,0.4)] hover:border-signal hover:bg-signal hover:shadow-[0_24px_50px_-24px_rgba(28,91,255,0.6)] sm:min-h-[270px] sm:p-7"
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-[11px] font-semibold tracking-[0.16em] text-ink/30 transition-colors group-hover:text-white/50">
                    {category.number}
                  </span>
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-sky text-signal transition-colors duration-300 group-hover:bg-white/15 group-hover:text-white">
                    <Icon name={category.icon} size={19} />
                  </span>
                </div>

                <h3 className="mt-auto pt-8 font-display text-[22px] font-semibold leading-[1.08] tracking-[-0.03em] text-ink transition-colors group-hover:text-white sm:pt-12">
                  {category.title}
                </h3>
                <p className="mt-3 max-w-[280px] text-[12.5px] leading-relaxed text-smoke transition-colors group-hover:text-white/65">
                  {category.short}
                </p>

                <span className="mt-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-ink/30 transition-colors group-hover:text-white/70">
                  Lihat detail
                  <Icon
                    name="arrow-right"
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-xl border border-signal/15 bg-white px-5 py-4 sm:flex-row sm:items-center sm:px-6">
            <p className="text-[13px] text-smoke">
              Butuh item yang tidak tercantum?{" "}
              <span className="font-semibold text-ink">
                Kami bisa bantu carikan.
              </span>
            </p>
            <a
              href={waLink(
                "Halo, saya butuh item yang tidak ada di daftar kategori. Boleh saya kirim spesifikasinya?",
              )}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-2 text-[12px] font-bold text-signal-deep"
            >
              Tanya pengadaan khusus
              <Icon
                name="arrow-up-right"
                size={14}
                className="arrow-shift"
              />
            </a>
          </div>
        </div>
      </section>

      {/* ── Projects ─────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="shell">
          <SectionHeading
            label="03 — Rekam Jejak"
            title={
              <>
                Sudah terlibat di proyek
                <br className="hidden sm:block" /> yang Anda kenal.
              </>
            }
            description="Jembatan, gedung, kawasan, sampai bendungan. Beberapa proyek yang kami dukung dalam pengadaan material dan perlengkapannya."
            action={
              <Link href="/proyek" className="btn btn-dark group">
                Semua proyek
                <Icon name="arrow-up-right" size={16} className="icon-arrow" />
              </Link>
            }
          />

          <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <div
                key={project.slug}
                data-reveal
                style={
                  { "--reveal-delay": `${index * 100}ms` } as React.CSSProperties
                }
                className={
                  index === 1
                    ? "lg:mt-14"
                    : index === 2
                      ? "lg:mt-28"
                      : undefined
                }
              >
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-ink/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[12px] font-medium text-smoke">
              <span className="font-bold text-ink">10 proyek tercatat</span> —
              dari Palembang sampai Pidie, Aceh.
            </p>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink/35">
              Dokumentasi: CV. Sukses Aman Sejahtera
            </p>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-signal py-20 text-white sm:py-24 lg:py-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.18),transparent_42%),radial-gradient(circle_at_10%_90%,rgba(0,0,0,0.14),transparent_45%)]"
        />
        <div className="dot-grid absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="shell relative">
          <SectionHeading
            dark
            label="04 — Kenapa Kami"
            title={
              <>
                Pengadaan yang tidak bikin
                <br className="hidden sm:block" /> Anda bolak-balik menelepon.
              </>
            }
            description="Empat hal sederhana yang kami jaga di setiap permintaan — dari satu dus sekrup sampai pasokan material untuk tahapan proyek."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:gap-5">
            {values.map((value, index) => (
              <article
                key={value.number}
                data-reveal
                data-spotlight
                style={
                  { "--reveal-delay": `${index * 70}ms` } as React.CSSProperties
                }
                className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/[0.08] p-6 backdrop-blur-sm transition-colors duration-500 hover:bg-white hover:text-ink sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-[11px] font-semibold tracking-[0.16em] text-white/40 transition-colors group-hover:text-ink/30">
                    {value.number}
                  </span>
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-white/25 text-white/75 transition-colors duration-500 group-hover:border-signal group-hover:bg-signal group-hover:text-white">
                    <Icon name={value.icon} size={20} />
                  </span>
                </div>
                <h3 className="mt-10 font-display text-[26px] font-semibold leading-[1.05] tracking-[-0.035em] sm:mt-16 sm:text-[30px]">
                  {value.title}
                </h3>
                <p className="mt-4 max-w-md text-[13px] leading-relaxed text-white/80 transition-colors group-hover:text-smoke sm:text-sm">
                  {value.description}
                </p>
                <span
                  aria-hidden="true"
                  className="absolute -bottom-10 -right-6 font-display text-[120px] font-semibold leading-none tracking-[-0.08em] text-white/[0.06] transition-colors group-hover:text-signal/[0.07]"
                >
                  {value.number}
                </span>
              </article>
            ))}
          </div>

          <div className="mt-5 flex flex-col items-start justify-between gap-6 rounded-2xl bg-white px-6 py-7 text-ink shadow-[0_30px_60px_-36px_rgba(0,0,0,0.5)] sm:flex-row sm:items-center sm:px-8">
            <div className="flex items-center gap-4">
              <span className="hidden font-display text-4xl leading-none text-signal sm:block">
                ✳
              </span>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-ink/35">
                  Prinsip kerja
                </p>
                <p className="mt-1.5 font-display text-xl font-semibold tracking-[-0.03em] sm:text-2xl">
                  Solution is Our Orientation.
                </p>
              </div>
            </div>
            <a
              href={waLink(
                "Halo CV. Sukses Aman Sejahtera, saya ingin berdiskusi soal kebutuhan proyek.",
              )}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-signal group"
            >
              Diskusi kebutuhan
              <Icon name="arrow-up-right" size={16} className="icon-arrow" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────── */}
      <section className="section bg-gradient-to-b from-white to-[#f2f7ff]">
        <div className="shell">
          <SectionHeading
            label="05 — Alur Kerja"
            title={
              <>
                Dari RAB ke lokasi,
                <br className="hidden sm:block" /> lima langkah.
              </>
            }
            description="Proses yang jelas di awal membuat pengadaan lebih tenang di belakang. Ini alur yang biasa kami jalankan."
          />

          <div className="relative mt-14">
            <div
              aria-hidden="true"
              className="absolute left-5 top-5 hidden h-px w-[calc(100%-40px)] bg-signal/20 lg:block"
            />
            <div className="grid gap-8 lg:grid-cols-5 lg:gap-5">
              {processSteps.map((step, index) => (
                <div
                  key={step.number}
                  data-reveal
                  style={
                    {
                      "--reveal-delay": `${index * 80}ms`,
                    } as React.CSSProperties
                  }
                  className="group relative flex gap-5 lg:block"
                >
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-signal/20 bg-white font-display text-[12px] font-semibold text-signal shadow-[0_8px_20px_-14px_rgba(28,91,255,0.8)] transition-colors duration-300 group-hover:border-signal group-hover:bg-signal group-hover:text-white">
                    {step.number}
                  </div>
                  <div className="lg:mt-7 lg:pr-4">
                    <h3 className="font-display text-[20px] font-semibold leading-tight tracking-[-0.03em] text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-[12.5px] leading-relaxed text-smoke">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-3 border-t border-ink/10 pt-6 text-[11px] text-smoke sm:flex-row sm:items-center sm:justify-between">
            <p>
              Respon di jam kerja: {site.hours}.{" "}
              <span className="text-ink/60">{site.hoursNote}</span>
            </p>
            <p className="font-bold uppercase tracking-[0.16em] text-signal-deep">
              Tidak ada biaya untuk bertanya
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
