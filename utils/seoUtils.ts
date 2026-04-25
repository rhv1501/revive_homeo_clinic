// SEO utility functions

export const generateSEOFriendlyURL = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
};

export const truncateDescription = (
  text: string,
  maxLength: number = 160
): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).replace(/\s+\S*$/, "") + "...";
};

export const generateKeywords = (
  baseKeywords: string[],
  pageSpecific: string[] = []
): string => {
  const allKeywords = [...baseKeywords, ...pageSpecific];
  return [...new Set(allKeywords)].join(", ");
};

export const getCanonicalURL = (path: string): string => {
  const baseURL = typeof window !== "undefined" ? window.location.origin : "";
  return `${baseURL}${path}`;
};

// Base keywords for the website
export const BASE_KEYWORDS = [
  "homeopathy",
  "natural healing",
  "holistic medicine",
  "alternative medicine",
  "chronic diseases",
  "wellness",
  "health",
  "Chennai",
  "Tamil Nadu",
  "India",
];

// Page-specific keyword sets
export const PAGE_KEYWORDS = {
  home: [
    "homeopathy clinic",
    "best homeopathic doctor",
    "natural treatment",
    "homeopathic medicine",
  ],
  about: [
    "Dr. Nritiya Dave",
    "homeopathic doctor",
    "medical experience",
    "clinic history",
    "team",
  ],
  contact: [
    "contact homeopathy clinic",
    "appointment booking",
    "consultation",
    "clinic address",
    "phone number",
  ],
  onlineConsultation: [
    "online homeopathy consultation",
    "virtual consultation",
    "telehealth homeopathy",
    "video consultation",
    "homeopathy consultation from home",
  ],
  treatments: [
    "homeopathic treatments",
    "chronic disease treatment",
    "natural remedies",
    "therapeutic solutions",
  ],
  testimonials: [
    "patient reviews",
    "success stories",
    "testimonials",
    "patient feedback",
    "case studies",
  ],
  blog: [
    "homeopathy articles",
    "health tips",
    "natural health blog",
    "wellness advice",
  ],
};

// Common page descriptions
export const PAGE_DESCRIPTIONS = {
  home: "Expert homeopathic treatment for chronic diseases, natural healing, and holistic wellness. 15+ years of experience in Chennai. Book your consultation today.",
  about:
    "Learn about Revivee Homeo Clinic, our mission for natural healing, and meet our expert team led by Dr. Nritiya Dave with 15+ years of experience.",
  contact:
    "Contact Revivee Homeo Clinic for expert homeopathic treatment. Schedule your consultation for chronic diseases, natural healing, and holistic wellness care.",
  onlineConsultation:
    "Book an online homeopathy consultation with Revivee Homeo Clinic. Get a personalized virtual assessment for chronic conditions, skin issues, hormonal concerns, and pediatric care.",
  treatments:
    "Comprehensive homeopathic treatments for chronic diseases, women's health, child care, and general wellness. Natural healing solutions for all ages.",
  testimonials:
    "Read success stories and testimonials from our patients who experienced natural healing through our expert homeopathic treatments.",
  blog: "Latest articles on homeopathy, natural healing tips, wellness advice, and insights into holistic medicine from our expert practitioners.",
};

// Social media meta data
export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/reviveehomeoclinic",
  instagram: "https://www.instagram.com/reviveehomeoclinic",
  twitter: "https://www.twitter.com/reviveehomeoclinic",
  linkedin: "https://www.linkedin.com/company/reviveehomeoclinic",
  youtube: "https://www.youtube.com/reviveehomeoclinic",
};

// Business information for structured data
export const BUSINESS_INFO = {
  name: "Revivee Homeo Clinic",
  description:
    "Expert homeopathic treatment for chronic diseases and natural healing",
  phone: "+91-9876543210",
  email: "info@revivehomeoclinic.com",
  address: {
    street: "123 Wellness Street",
    city: "Chennai",
    state: "Tamil Nadu",
    zipCode: "600001",
    country: "India",
  },
  hours: {
    monday: "09:00-18:00",
    tuesday: "09:00-18:00",
    wednesday: "09:00-18:00",
    thursday: "09:00-18:00",
    friday: "09:00-18:00",
    saturday: "09:00-18:00",
    sunday: "Closed",
  },
};

export const validateSEOData = (data: {
  title?: string;
  description?: string;
  keywords?: string;
}) => {
  const issues: string[] = [];

  if (!data.title) {
    issues.push("Title is required");
  } else if (data.title.length > 60) {
    issues.push("Title should be under 60 characters");
  }

  if (!data.description) {
    issues.push("Description is required");
  } else if (data.description.length > 160) {
    issues.push("Description should be under 160 characters");
  } else if (data.description.length < 120) {
    issues.push("Description should be at least 120 characters for better SEO");
  }

  if (data.keywords && data.keywords.split(",").length > 10) {
    issues.push("Consider using fewer than 10 keywords for better focus");
  }

  return {
    isValid: issues.length === 0,
    issues,
  };
};
