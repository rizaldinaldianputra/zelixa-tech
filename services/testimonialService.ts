import { prisma } from '../utils/db';
import { ICreateTestimonial, IUpdateTestimonial } from '../types/testimonial.interface';

export const testimonialService = {
  async getAll() {
    return prisma.testimonial.findMany({
      orderBy: { createdAt: 'desc' },
    });
  },

  async getById(id: string) {
    return prisma.testimonial.findUnique({
      where: { id },
    });
  },

  async create(data: ICreateTestimonial) {
    return prisma.testimonial.create({
      data,
    });
  },

  async update(id: string, data: IUpdateTestimonial) {
    return prisma.testimonial.update({
      where: { id },
      data,
    });
  },

  async delete(id: string) {
    return prisma.testimonial.delete({
      where: { id },
    });
  },
};
