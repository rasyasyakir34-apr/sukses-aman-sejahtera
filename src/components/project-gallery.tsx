"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import {
  projectFilters,
  projects,
  type Project,
  type ProjectCategory,
  waLink,
} from "@/lib/site";

export function ProjectGallery() {
  const [filter, setFilter] = useState<ProjectCategory | "Semua">("Semua");
  const [selected, setSelected] = useState<Project | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const shown =
    filter === "Semua"
      ? projects
      : projects.filter((project) => project.category === filter);

  useEffect(() => {
    if (!selected) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [selected]);

  return (
    <>
      <div className="flex flex-col gap-5 border-b border-ink/15 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="-mx-1 flex flex-wrap gap-1.5 px-1">
          {projectFilters.map((item) => {
            const active = filter === item;
            const count =
              item === "Semua"
                ? projects.length
                : projects.filter((project) => project.category === item)
                    .length;

            return (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                aria-pressed={active}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-[11px] font-semibold leading-none transition-colors duration-300 ${
                  active
                    ? "border-signal bg-signal text-white shadow-[0_8px_20px_-12px_rgba(28,91,255,0.8)]"
                    : "border-ink/15 bg-white text-smoke hover:border-signal/50 hover:text-ink"
                }`}
              >
                {item}
                <span
                  className={`text-[9px] tabular-nums ${
                    active ? "text-white/70" : "text-ink/30"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
        <p className="shrink-0 text-[10px] font-bold uppercase tracking-[0.16em] text-ink/35">
          {shown.length} proyek ditampilkan
        </p>
      </div>

      <div
        key={filter}
        className="grid-in mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
      >
        {shown.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
            onSelect={setSelected}
          />
        ))}
      </div>

      <p className="mt-12 border-t border-ink/15 pt-5 text-[11px] text-smoke">
        Dokumentasi visual mengikuti arsip yang tersedia. Beberapa proyek
        lainnya tetap tercatat tanpa foto publikasi.
      </p>

      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-[140] flex items-center justify-center p-3 sm:p-6"
        >
          <button
            type="button"
            aria-label="Tutup detail proyek"
            onClick={() => setSelected(null)}
            className="modal-backdrop absolute inset-0 h-full w-full cursor-default bg-ink/70 backdrop-blur-sm"
          />

          <div className="modal-panel relative grid max-h-[92dvh] w-full max-w-5xl grid-rows-[240px_minmax(0,1fr)] overflow-hidden rounded-2xl bg-white shadow-2xl md:grid-cols-[1.02fr_0.98fr] md:grid-rows-1">
            <div className="relative overflow-hidden bg-steel md:min-h-[520px]">
              {selected.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={selected.image}
                  alt={`Dokumentasi ${selected.title}`}
                  className="absolute inset-0 h-full w-full object-cover saturate-[0.85]"
                />
              ) : (
                <div className="grain absolute inset-0 overflow-hidden">
                  <div className="dot-grid absolute inset-0 opacity-70" />
                  <span className="absolute inset-0 grid place-items-center font-display text-7xl font-semibold tracking-[-0.06em] text-white/10">
                    SAS
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-ink/10" />
              <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-ink/45 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md">
                {selected.category}
              </span>
            </div>

            <div className="relative min-h-0 overflow-y-auto p-5 sm:p-8">
              <button
                ref={closeRef}
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Tutup"
                className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-ink/15 bg-white/85 text-ink/60 backdrop-blur transition-colors hover:border-signal hover:bg-signal hover:text-white"
              >
                <Icon name="close" size={17} />
              </button>

              <p className="eyebrow text-signal-deep">Detail proyek</p>

              <h2
                id="project-modal-title"
                className="mt-5 max-w-sm font-display text-[30px] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-[36px]"
              >
                {selected.title}
              </h2>

              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-semibold text-ink/45">
                <span className="flex items-center gap-1.5">
                  <Icon name="pin" size={13} className="text-signal" />
                  {selected.location}
                </span>
                {selected.client && (
                  <span className="flex items-center gap-1.5">
                    <Icon name="boxes" size={13} className="text-signal" />
                    {selected.client}
                  </span>
                )}
              </div>

              <p className="mt-5 text-[13px] leading-relaxed text-smoke">
                {selected.description}
              </p>

              <div className="mt-6 border-t border-ink/12 pt-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-ink/35">
                  Dukungan pengadaan
                </p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {selected.scope.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-ink/12 px-2.5 py-1.5 text-[10.5px] font-medium leading-none text-ink/65"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 flex flex-col gap-2.5">
                <a
                  href={waLink(
                    `Halo CV. Sukses Aman Sejahtera, saya melihat proyek ${selected.title} di website. Saya ingin menanyakan pengadaan untuk proyek serupa.`,
                  )}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn btn-signal group w-full"
                >
                  <Icon name="whatsapp" size={16} />
                  Tanya proyek serupa
                </a>
                <Link
                  href="/kontak"
                  className="btn btn-outline group w-full"
                  onClick={() => setSelected(null)}
                >
                  Kirim daftar kebutuhan
                  <Icon
                    name="arrow-up-right"
                    size={15}
                    className="icon-arrow"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
