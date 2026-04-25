import React, { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  url?: string;
  image?: string;
  type?: "website" | "article" | "profile";
  siteName?: string;
  locale?: string;
  twitterCard?: "summary" | "summary_large_image";
  noIndex?: boolean;
  canonicalUrl?: string;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = "homeopathy, natural healing, holistic medicine, homeopathic doctor, alternative medicine, chronic diseases, wellness, health",
  author = "Dr. Nritiya Dave",
  url = typeof window !== "undefined" ? window.location.href : "",
  image = "/images/og-image.jpg",
  type = "website",
  siteName = "Revivee Homeo Clinic",
  locale = "en_US",
  twitterCard = "summary_large_image",
  noIndex = false,
  canonicalUrl,
  structuredData,
}) => {
  const fullTitle = `${title} | ${siteName}`;
  const imageUrl = image.startsWith("http")
    ? image
    : `${typeof window !== "undefined" ? window.location.origin : ""}${image}`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Function to update or create meta tags
    const updateMetaTag = (
      name: string,
      content: string,
      property?: boolean
    ) => {
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

    // Function to update or create link tags
    const updateLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(
        `link[rel="${rel}"]`
      ) as HTMLLinkElement;

      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", rel);
        document.head.appendChild(link);
      }
      link.setAttribute("href", href);
    };

    // Basic Meta Tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", author);
    updateMetaTag("viewport", "width=device-width, initial-scale=1.0");
    updateMetaTag("robots", noIndex ? "noindex,nofollow" : "index,follow");
    updateMetaTag("language", "English");

    // Open Graph Meta Tags
    updateMetaTag("og:title", fullTitle, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", imageUrl, true);
    updateMetaTag("og:url", url, true);
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:site_name", siteName, true);
    updateMetaTag("og:locale", locale, true);

    // Twitter Card Meta Tags
    updateMetaTag("twitter:card", twitterCard);
    updateMetaTag("twitter:title", fullTitle);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", imageUrl);
    updateMetaTag("twitter:creator", "@reviveehomeoclinic");

    // Additional Meta Tags for Medical Websites
    updateMetaTag("rating", "general");
    updateMetaTag("distribution", "global");
    updateMetaTag("revisit-after", "7 days");
    updateMetaTag("expires", "never");
    updateMetaTag("classification", "healthcare, medical, homeopathy");
    updateMetaTag("coverage", "worldwide");
    updateMetaTag("target", "patients, healthcare seekers");
    updateMetaTag("audience", "all");
    updateMetaTag(
      "health-topics",
      "homeopathy, natural healing, chronic diseases, wellness, alternative medicine"
    );
    updateMetaTag(
      "medical-disclaimer",
      "This website provides general information about homeopathic treatments and should not replace professional medical advice."
    );

    // Canonical URL
    if (canonicalUrl) {
      updateLinkTag("canonical", canonicalUrl);
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

    // Cleanup function to remove meta tags when component unmounts
    return () => {
      // Note: In a real application, you might want to store original values
      // and restore them, but for this use case, leaving them is fine
    };
  }, [
    fullTitle,
    description,
    keywords,
    author,
    url,
    imageUrl,
    type,
    siteName,
    locale,
    twitterCard,
    noIndex,
    canonicalUrl,
    structuredData,
  ]);

  return null; // This component doesn't render anything visible
};

export default SEO;
