
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "/", priority: 1.0 },
    { url: "/servicos", priority: 0.8 },
    { url: "/sobre", priority: 0.7 },
    { url: "/contato", priority: 0.7 },
    { url: "/privacidade", priority: 0.4 }
  ];
}
