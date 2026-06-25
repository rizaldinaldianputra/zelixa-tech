export interface IProduct {
  id: string;
  slug: string;
  title: string;
  tag: string;
  desc: string;
  longDesc?: string | null;
  features: string[];
  techUsed: string[];
  gallery: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateProduct {
  slug: string;
  title: string;
  tag: string;
  desc: string;
  longDesc?: string;
  features?: string[];
  techUsed?: string[];
  gallery?: string[];
}

export interface IUpdateProduct extends Partial<ICreateProduct> {}
