
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.magpass.com.br";
  const currentDate = new Date();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/servicos`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacidade`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
