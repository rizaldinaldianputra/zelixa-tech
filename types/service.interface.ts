export interface IService {
  id: string;
  title: string;
  desc: string;
  icon: string;
  colSpan: number;
  bgClass?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateService {
  title: string;
  desc: string;
  icon: string;
  colSpan?: number;
  bgClass?: string;
}

export interface IUpdateService extends Partial<ICreateService> {}
