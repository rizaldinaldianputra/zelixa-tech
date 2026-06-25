export interface ITestimonial {
  id: string;
  name: string;
  role: string;
  avatar?: string | null;
  text: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateTestimonial {
  name: string;
  role: string;
  avatar?: string;
  text: string;
}

export interface IUpdateTestimonial extends Partial<ICreateTestimonial> {}
