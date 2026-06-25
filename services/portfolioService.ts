import { prisma } from '../utils/db';
import { ICreatePortfolio, IUpdatePortfolio } from '../types/portfolio.interface';

export const portfolioService = {
  async getAll() {
    return prisma.portfolio.findMany({
      orderBy: { createdAt: 'desc' },
    });
  },

  async getById(id: string) {
    return prisma.portfolio.findUnique({
      where: { id },
    });
  },

  async getBySlug(slug: string) {
    return prisma.portfolio.findUnique({
      where: { slug },
    });
  },

  async create(data: ICreatePortfolio) {
    return prisma.portfolio.create({
      data: {
        ...data,
        techStack: data.techStack || [],
      },
    });
  },

  async update(id: string, data: IUpdatePortfolio) {
    return prisma.portfolio.update({
      where: { id },
      data,
    });
  },

  async delete(id: string) {
    return prisma.portfolio.delete({
      where: { id },
    });
  },
};
