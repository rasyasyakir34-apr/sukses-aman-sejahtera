import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/tentang", priority: 0.8 },
    { path: "/layanan", priority: 0.9 },
    { path: "/proyek", priority: 0.9 },
    { path: "/kontak", priority: 0.8 },
  ];

  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${site.url}${route.path}/`,
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
