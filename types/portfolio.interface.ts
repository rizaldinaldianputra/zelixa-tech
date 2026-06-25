export interface IPortfolio {
  id: string;
  slug: string;
  title: string;
  category: string;
  desc: string;
  longDesc?: string | null;
  image?: string | null;
  liveLink?: string | null;
  techStack: string[];
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreatePortfolio {
  slug: string;
  title: string;
  category: string;
  desc: string;
  longDesc?: string;
  image?: string;
  liveLink?: string;
  techStack?: string[];
  featured?: boolean;
}

export interface IUpdatePortfolio extends Partial<ICreatePortfolio> {}
