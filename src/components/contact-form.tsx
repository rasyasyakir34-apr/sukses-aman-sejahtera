"use client";

import { useState } from "react";
import { Icon } from "@/components/icons";
import { categories, site, waLink } from "@/lib/site";

const inputClass =
  "w-full rounded-xl border border-ink/15 bg-white px-3.5 py-3 text-[13px] text-ink placeholder:text-ink/30 shadow-[0_1px_0_rgba(255,255,255,0.8)_inset] transition-colors duration-300 focus:border-signal focus:outline-none focus:ring-2 focus:ring-signal/15";

const labelClass =
  "mb-2 block text-[9px] font-bold uppercase tracking-[0.18em] text-ink/45";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const contact = String(data.get("contact") ?? "").trim();
    const category = String(data.get("category") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const lines = [
      "Halo CV. Sukses Aman Sejahtera,",
      "",
      `Nama: ${name}`,
      company ? `Perusahaan: ${company}` : "",
      `Kontak: ${contact}`,
      `Kategori: ${category}`,
      "",
      "Kebutuhan:",
      message,
    ].filter(Boolean);

    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-ink/10 bg-gradient-to-b from-white to-cloud p-5 shadow-[0_30px_70px_-46px_rgba(10,27,61,0.5)] sm:p-7">
      <div
        aria-hidden="true"
        className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-signal/10 blur-[60px]"
      />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-signal">
            Form permintaan
          </p>
          <h2 className="mt-3 font-display text-[26px] font-semibold leading-[1.05] tracking-[-0.035em] text-ink sm:text-[32px]">
            Ceritakan kebutuhan Anda.
          </h2>
        </div>
        <span className="hidden h-11 w-11 shrink-0 place-items-center rounded-full bg-sky text-signal sm:grid">
          <Icon name="package" size={19} />
        </span>
      </div>

      <p className="relative mt-3 max-w-sm text-[12px] leading-relaxed text-smoke">
        Isi ringkasnya. Setelah dikirim, WhatsApp akan terbuka dengan pesan yang
        sudah tersusun — Anda bisa meninjau sebelum mengirim.
      </p>

      <form onSubmit={handleSubmit} className="relative mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClass}>
              Nama <span className="text-signal">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Nama Anda"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="company" className={labelClass}>
              Perusahaan
            </label>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              placeholder="Nama perusahaan"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="contact" className={labelClass}>
              WhatsApp / Email <span className="text-signal">*</span>
            </label>
            <input
              id="contact"
              name="contact"
              type="text"
              required
              autoComplete="tel"
              placeholder="08xx atau email"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="category" className={labelClass}>
              Kategori
            </label>
            <select
              id="category"
              name="category"
              defaultValue={categories[0].title}
              className={`${inputClass} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%2353627a' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")] bg-[length:14px] bg-[right_0.9rem_center] bg-no-repeat pe-9`}
            >
              {categories.map((category) => (
                <option key={category.slug} value={category.title}>
                  {category.title}
                </option>
              ))}
              <option value="Lainnya">Lainnya / belum tahu</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            Kebutuhan <span className="text-signal">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Contoh: butuh 500 sak semen dan 20 lembar geotextile untuk proyek di Palembang, dibutuhkan minggu depan."
            className={`${inputClass} resize-none`}
          />
        </div>

        <button type="submit" className="btn btn-signal group w-full">
          <Icon name="whatsapp" size={17} />
          Lanjutkan ke WhatsApp
          <Icon name="arrow-up-right" size={15} className="icon-arrow" />
        </button>

        {sent && (
          <p
            role="status"
            className="flex items-start gap-2 rounded-xl border border-emerald-500/25 bg-emerald-50 px-3.5 py-3 text-[11.5px] leading-relaxed text-emerald-700"
          >
            <Icon name="check" size={14} className="mt-0.5 shrink-0" />
            Pesan sudah disiapkan. Kalau tab WhatsApp tidak terbuka otomatis,
            gunakan tombol WhatsApp di halaman ini.
          </p>
        )}

        <p className="text-[10px] leading-relaxed text-ink/40">
          Data tidak disimpan di situs ini. Anda dapat juga menghubungi langsung{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-semibold text-signal-deep underline underline-offset-2 hover:text-ink"
          >
            {site.email}
          </a>
          .
        </p>
      </form>
    </div>
  );
}
