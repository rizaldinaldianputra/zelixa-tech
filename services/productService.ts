import { prisma } from '../utils/db';
import { ICreateProduct, IUpdateProduct } from '../types/product.interface';

export const productService = {
  async getAll() {
    return prisma.product.findMany({
      orderBy: { createdAt: 'desc' },
    });
  },

  async getById(id: string) {
    return prisma.product.findUnique({
      where: { id },
    });
  },

  async getBySlug(slug: string) {
    return prisma.product.findUnique({
      where: { slug },
    });
  },

  async create(data: ICreateProduct) {
    return prisma.product.create({
      data: {
        ...data,
        features: data.features || [],
        techUsed: data.techUsed || [],
        gallery: data.gallery || [],
      },
    });
  },

  async update(id: string, data: IUpdateProduct) {
    return prisma.product.update({
      where: { id },
      data,
    });
  },

  async delete(id: string) {
    return prisma.product.delete({
      where: { id },
    });
  },
};
