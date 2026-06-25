import { prisma } from '../utils/db';
import { ICreateService, IUpdateService } from '../types/service.interface';

export const frontServiceService = {
  async getAll() {
    return prisma.service.findMany({
      orderBy: { createdAt: 'asc' },
    });
  },

  async getById(id: string) {
    return prisma.service.findUnique({
      where: { id },
    });
  },

  async create(data: ICreateService) {
    return prisma.service.create({
      data,
    });
  },

  async update(id: string, data: IUpdateService) {
    return prisma.service.update({
      where: { id },
      data,
    });
  },

  async delete(id: string) {
    return prisma.service.delete({
      where: { id },
    });
  },
};
