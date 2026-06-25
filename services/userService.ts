import { prisma } from '../utils/db';
import { ICreateUser, IUpdateUser } from '../types/user.interface';

export const userService = {
  async getAllUsers() {
    return prisma.user.findMany({
      orderBy: { createdAt: 'desc' },
    });
  },

  async getUserById(id: string) {
    return prisma.user.findUnique({
      where: { id },
    });
  },

  async createUser(data: ICreateUser) {
    return prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        role: data.role || 'USER',
      },
    });
  },

  async updateUser(id: string, data: IUpdateUser) {
    return prisma.user.update({
      where: { id },
      data,
    });
  },

  async deleteUser(id: string) {
    return prisma.user.delete({
      where: { id },
    });
  },
};
