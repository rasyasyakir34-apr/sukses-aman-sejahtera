import { Icon } from "@/components/icons";
import { waLink } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <a
      href={waLink(
        "Halo CV. Sukses Aman Sejahtera, saya ingin menanyakan kebutuhan pengadaan untuk proyek saya.",
      )}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat via WhatsApp"
      className="group fixed bottom-4 right-4 z-[90] flex items-center gap-0 overflow-hidden rounded-full bg-signal text-white shadow-[0_12px_40px_-8px_rgba(28,91,255,0.7)] transition-all duration-300 hover:bg-ink sm:bottom-6 sm:right-6"
    >
      <span className="relative grid h-13 w-13 shrink-0 place-items-center sm:h-14 sm:w-14">
        <span className="absolute inset-2 animate-ping rounded-full bg-white/25 [animation-duration:2.8s]" />
        <Icon name="whatsapp" size={23} className="relative" />
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-[12px] font-bold transition-all duration-500 group-hover:max-w-[150px] group-hover:pe-5">
        Chat via WhatsApp
      </span>
    </a>
  );
}
