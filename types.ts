// Fix: Import `ComponentType` from react to resolve type errors.
import type { ComponentType } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'dark-hero';

export interface CTA {
  label: string;
  url: string;
  variant: ButtonVariant;
  type: 'link' | 'a';
}

export interface Feature {
  // Fix: Use imported `ComponentType`.
  icon: ComponentType<{ className?: string }>;
  title: string;
  benefit: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface Screenshot {
  image: string;
  alt: string;
}

export interface HomePageContent {
  hero: {
    headline: string;
    subhead: string;
    ctas: CTA[];
    image: string;
  };
  features: Feature[];
  testimonials: Testimonial[];
  screenshots: Screenshot[];
}

export interface FeaturePageSection {
  title: string;
  description: string;
  screenshot: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  summary: string;
  body: string;
  cover_image: string;
  tags: string[];
  author: string;
  published_at: string;
  seo: {
    title: string;
    description: string;
    og_image: string;
  };
}

export interface FAQ {
  q: string;
  a: string;
}

export interface AppContent {
  home: HomePageContent;
  features_page: {
    sections: FeaturePageSection[];
  };
  blog: {
    posts: BlogPost[];
  };
  contact: {
    faqs: FAQ[];
  };
  common: {
    header_cta_label: string;
    features_cta_label: string;
  };
}

export interface SocialLink {
    name: string;
    url: string;
    // Fix: Use imported `ComponentType`.
    icon: ComponentType<{ className?: string }>;
}

