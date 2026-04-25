// Structured data templates for SEO

interface PhysicianData {
  name: string;
  bio: string;
  title: string;
  qualification: string[];
}

export const createMedicalOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: "Revive Homeo Clinic",
  description:
    "Expert homeopathic treatment for chronic diseases and natural healing",
  url: "https://www.revivehomeoclinic.com",
  logo: "https://www.revivehomeoclinic.com/images/logo.png",
  image: "https://www.revivehomeoclinic.com/images/clinic.jpg",
  telephone: "+91-9876543210",
  email: "info@revivehomeoclinic.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Wellness Street",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600001",
    addressCountry: "IN",
  },
  openingHours: ["Mo-Sa 09:00-18:00"],
  medicalSpecialty: "Homeopathy",
  availableService: [
    {
      "@type": "MedicalTherapy",
      name: "Chronic Disease Treatment",
      description: "Specialized homeopathic treatment for chronic conditions",
    },
    {
      "@type": "MedicalTherapy",
      name: "General Consultation",
      description: "Comprehensive homeopathic health consultation",
    },
    {
      "@type": "MedicalTherapy",
      name: "Child & Infant Care",
      description: "Gentle homeopathic treatment for children and infants",
    },
    {
      "@type": "MedicalTherapy",
      name: "Women's Health",
      description: "Specialized homeopathic care for women's health issues",
    },
  ],
  sameAs: [
    "https://www.facebook.com/revivehomeoclinic",
    "https://www.instagram.com/revivehomeoclinic",
    "https://www.linkedin.com/company/revivehomeoclinic",
  ],
});

export const createPhysicianSchema = (doctor: PhysicianData) => ({
  "@context": "https://schema.org",
  "@type": "Physician",
  name: doctor.name,
  description: doctor.bio,
  jobTitle: doctor.title,
  qualifications: doctor.qualification,
  medicalSpecialty: "Homeopathy",
  worksFor: {
    "@type": "MedicalOrganization",
    name: "Revive Homeo Clinic",
  },
  alumniOf: "Homeopathic Medical College",
  memberOf: "Indian Homeopathic Medical Association",
  hasCredential: doctor.qualification,
  knowsAbout: [
    "Homeopathy",
    "Natural Healing",
    "Chronic Disease Treatment",
    "Holistic Medicine",
  ],
});

export const createWebPageSchema = (pageData: {
  title: string;
  description: string;
  url: string;
  type?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: pageData.title,
  description: pageData.description,
  url: pageData.url,
  isPartOf: {
    "@type": "WebSite",
    name: "Revive Homeo Clinic",
    url: "https://www.revivehomeoclinic.com",
  },
  about: {
    "@type": "MedicalOrganization",
    name: "Revive Homeo Clinic",
  },
  keywords: "homeopathy, natural healing, chronic diseases, holistic medicine",
});

export const createContactPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Us - Revive Homeo Clinic",
  description:
    "Get in touch with our homeopathy clinic for consultations and appointments",
  url: "https://www.revivehomeoclinic.com/contact",
  mainEntity: {
    "@type": "MedicalOrganization",
    name: "Revive Homeo Clinic",
    telephone: "+91-9876543210",
    email: "info@revivehomeoclinic.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Wellness Street",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600001",
      addressCountry: "IN",
    },
  },
});

export const createAboutPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Us - Revive Homeo Clinic",
  description:
    "Learn about our homeopathy clinic, our mission, and our expert team",
  url: "https://www.revivehomeoclinic.com/about",
  mainEntity: createMedicalOrganizationSchema(),
});

export const createBreadcrumbSchema = (
  breadcrumbs: Array<{ name: string; url: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.name,
    item: crumb.url,
  })),
});

export const createFAQSchema = (
  faqs: Array<{ question: string; answer: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});
