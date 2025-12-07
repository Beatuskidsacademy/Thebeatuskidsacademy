import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

export function SEO({
  title = "The Beatus Kids Academy - Where Young Minds Bloom | Kreedo Curriculum",
  description = "The Beatus Kids Academy offers holistic early childhood education with Kreedo Curriculum for Playgroup, Pre-Nursery, LKG, and UKG. Expert teachers, state-of-the-art curriculum, ideal 1:12 ratio. Admission open! Empowering children to become confident, curious learners.",
  keywords = "beatus kids academy, preschool, kreedo curriculum, playgroup, pre-nursery, LKG, UKG, early childhood education, holistic learning, play-based learning, kindergarten prep, child care, nursery school, best preschool",
  ogImage = "https://images.unsplash.com/photo-1633762348290-33a37f4d7fcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  ogType = "website",
  canonicalUrl = "https://www.sunshinepreschool.com"
}: SEOProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Preschool",
    "name": "The Beatus Kids Academy",
    "image": ogImage,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2nd Cross Rd, 2nd Stage, HAL 3rd Stage, BDA Layout, Jeevan Bima Nagar",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560017",
      "addressCountry": "IN"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": 12.9716, "longitude": 77.5946 },
    "url": canonicalUrl,
    "telephone": "+91-8092424599, +91-8050730719",
    "priceRange": "$$",
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens":"08:00","closes":"18:00" }
    ],
    "sameAs": [
      "https://www.facebook.com/thebeatuskidsacademy1/",
      "https://www.instagram.com/thebeatuskidsacademy/",
      "https://www.youtube.com/@thebeatuskidsacademy22"
    ],
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "150" }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="The Beatus Kids Academy" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="The Beatus Kids Academy" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@beatuskidsacademy" />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
}
