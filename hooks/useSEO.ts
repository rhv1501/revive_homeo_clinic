import { useEffect } from "react";

interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: object;
}

export const useSEO = ({
  title,
  description,
  keywords = "homeopathy clinic, natural healing, chronic disease treatment, holistic medicine, homeopathic doctor, alternative medicine",
  canonical,
  ogImage = "https://www.revivehomeoclinic.com/images/og-image.jpg",
  structuredData,
}: SEOData) => {
  useEffect(() => {
    // Update document title
    document.title = `${title} | Revivee Homeo Clinic`;

    // Create or update meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;

      if (!meta) {
        meta = document.createElement("meta");
        if (property) {
          meta.setAttribute("property", name);
        } else {
          meta.setAttribute("name", name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Basic meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("robots", "index, follow");

    // Open Graph tags
    updateMetaTag("og:title", `${title} | Revivee Homeo Clinic`, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:type", "website", true);
    updateMetaTag("og:site_name", "Revivee Homeo Clinic", true);
    updateMetaTag("og:image", ogImage, true);
    updateMetaTag("og:url", canonical || window.location.href, true);

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", `${title} | Revivee Homeo Clinic`);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", ogImage);
    updateMetaTag("twitter:creator", "@reviveehomeoclinic");

    // Canonical URL
    if (canonical) {
      let link = document.querySelector(
        'link[rel="canonical"]'
      ) as HTMLLinkElement;
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    // Structured Data
    if (structuredData) {
      let script = document.querySelector(
        'script[type="application/ld+json"]'
      ) as HTMLScriptElement;
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, canonical, ogImage, structuredData]);
};
