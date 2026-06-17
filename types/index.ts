export interface Slide {
  title: string;
  subtitle: string;
  bgClass: string;
}

export interface Service {
  title: string;
  desc: string;
  icon: string;
  colSpan?: number;
  bgClass?: string;
}

export interface Product {
  slug: string;
  title: string;
  tag: string;
  desc: string;
  features: string[];
  longDesc?: string;
  metrics?: { label: string; value: string }[];
  techUsed?: string[];
  gallery?: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export interface WhyChooseUsItem {
  title: string;
  desc: string;
  icon: string;
  glowColor: string;
}

export interface PortfolioProject {
  slug: string;
  title: string;
  category: string;
  desc: string;
  image: string;
  liveLink: string;
  techStack: string[];
  featured?: boolean;
  longDesc?: string;
  challenges?: string[];
  solutions?: string[];
  metrics?: { label: string; value: string }[];
  gallery?: string[];
  liveText?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  desc: string;
  duration: string;
  icon: string;
}

export interface TechItem {
  name: string;
  icon: string;
  level: string;
  percentage: number;
}

export interface TechCategory {
  category: string;
  items: TechItem[];
}

export interface PricingPlan {
  name: string;
  priceMonthly: string;
  priceAnnually: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
