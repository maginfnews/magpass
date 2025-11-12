import { company } from "@/lib/company";

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": company.name,
    "description": company.slogan,
    "url": company.site,
    "logo": `${company.site}/logo-magpass.png`,
    "image": `${company.site}/logo-magpass.png`,
    "telephone": company.phoneMain,
    "email": company.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Guarulhos",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "sameAs": [
      "https://www.facebook.com/magpass",
      "https://www.linkedin.com/company/magpass",
      "https://www.instagram.com/magpass"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": company.phoneMain,
      "contactType": "customer service",
      "areaServed": "BR",
      "availableLanguage": ["Portuguese"]
    },
    "foundingDate": "2008",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": company.name,
    "description": "Integradora de infraestrutura e suporte técnico corporativo",
    "url": company.site,
    "telephone": company.phoneMain,
    "email": company.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Guarulhos",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-23.4538",
      "longitude": "-46.5333"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "$$"
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "IT Support and Infrastructure",
    "provider": {
      "@type": "Organization",
      "name": company.name
    },
    "areaServed": {
      "@type": "State",
      "name": "São Paulo"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de TI",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Suporte Técnico",
            "description": "Suporte técnico remoto e presencial para empresas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Administração de Redes",
            "description": "Gestão e monitoramento de infraestrutura de rede"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Backup em Nuvem",
            "description": "Soluções de backup e recuperação de dados"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Consultoria em TI",
            "description": "Consultoria especializada em tecnologia da informação"
          }
        }
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": company.site
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Serviços",
        "item": `${company.site}/servicos`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Contato",
        "item": `${company.site}/contato`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
