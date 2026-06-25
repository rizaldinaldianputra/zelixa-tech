import { PrismaClient } from '@prisma/client';
import { localizedData } from '../services/mockData';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding front page content...');
  const data = localizedData['id'];

  // Seed Services
  for (const svc of data.servicesData) {
    await prisma.service.create({
      data: {
        title: svc.title,
        desc: svc.desc,
        icon: svc.icon,
        colSpan: svc.colSpan || 1,
        bgClass: svc.bgClass || '',
      }
    });
  }
  console.log('Services seeded.');

  // Seed Products
  for (const prod of data.productsData) {
    await prisma.product.create({
      data: {
        slug: prod.slug,
        title: prod.title,
        tag: prod.tag,
        desc: prod.desc,
        longDesc: prod.longDesc || '',
        features: prod.features,
        techUsed: prod.techUsed,
        gallery: prod.gallery || [],
      }
    });
  }
  console.log('Products seeded.');

  // Seed Portfolio
  for (const port of data.portfolioProjects) {
    await prisma.portfolio.create({
      data: {
        slug: port.slug,
        title: port.title,
        category: port.category,
        desc: port.desc,
        longDesc: port.longDesc || '',
        image: port.image || '',
        liveLink: port.liveLink || '',
        techStack: port.techStack,
        featured: port.featured || false,
      }
    });
  }
  console.log('Portfolio seeded.');

  // Seed Testimonials
  for (const test of data.testimonialsData) {
    await prisma.testimonial.create({
      data: {
        name: test.name,
        role: test.role,
        text: test.text,
      }
    });
  }
  console.log('Testimonials seeded.');

  console.log('Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
