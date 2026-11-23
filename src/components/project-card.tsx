import Link from "next/link";
import { Icon } from "@/components/icons";
import type { Project } from "@/lib/site";

export function ProjectCard({
  project,
  index,
  onSelect,
}: {
  project: Project;
  index: number;
  onSelect?: (project: Project) => void;
}) {
  const content = (
    <>
      <div className="clip-notch relative aspect-[4/3] overflow-hidden bg-steel">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={`Dokumentasi ${project.title}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.045]"
          />
        ) : (
          <div className="grain relative h-full w-full overflow-hidden">
            <div className="dot-grid absolute inset-0 opacity-70" />
            <span className="absolute inset-0 grid place-items-center font-display text-6xl font-semibold tracking-[-0.06em] text-white/10">
              {project.category === "Jalan" ? "JLN" : "GED"}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/5 to-transparent" />

        <div className="absolute inset-x-4 top-4 flex items-start justify-between gap-3">
          <span className="rounded-full border border-white/40 bg-white/85 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-ink backdrop-blur-md">
            {project.category}
          </span>
          <span className="font-display text-[11px] font-semibold tabular-nums text-white/60">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4">
          <p className="flex items-center gap-1.5 text-[10px] font-semibold text-white/80">
            <Icon name="pin" size={12} className="text-white" />
            {project.location}
          </p>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-signal text-white transition-colors duration-300 group-hover:bg-white group-hover:text-signal-deep">
            <Icon
              name={onSelect ? "plus" : "arrow-up-right"}
              size={15}
              className="transition-transform duration-300 group-hover:rotate-45"
            />
          </span>
        </div>
      </div>

      <div className="pt-4">
        <h3 className="display-sm max-w-md text-[19px] leading-[1.15] tracking-[-0.025em] text-ink transition-colors duration-300 group-hover:text-signal-deep sm:text-[22px]">
          {project.shortTitle}
        </h3>
        {project.client && (
          <p className="mt-1.5 text-[11px] font-medium text-ink/40">
            {project.client}
          </p>
        )}
      </div>
    </>
  );

  if (onSelect) {
    return (
      <button
        type="button"
        onClick={() => onSelect(project)}
        aria-label={`Lihat detail ${project.title}`}
        className="group block w-full text-left"
      >
        {content}
      </button>
    );
  }

  return (
    <Link
      href={`/proyek#${project.slug}`}
      className="group block"
      aria-label={`Lihat proyek ${project.title}`}
    >
      {content}
    </Link>
  );
}
