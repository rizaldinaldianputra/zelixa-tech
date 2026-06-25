export interface IUser {
  id: string;
  name?: string | null;
  email: string;
  avatar?: string | null;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateUser {
  name?: string;
  email: string;
  password?: string;
  avatar?: string;
  role?: string;
}

export interface IUpdateUser {
  name?: string;
  email?: string;
  role?: string;
}
