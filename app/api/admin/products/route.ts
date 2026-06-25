import { NextRequest } from 'next/server';
import { productService } from '@/services/productService';
import { successResponse, errorResponse } from '@/utils/apiCore';
import { ICreateProduct } from '@/types/product.interface';
import { prisma } from '@/utils/db';

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const search = searchParams.get('search') || '';
    const page = parseInt(searchParams.get('page') || '1');
    const limit = 10;
    const skip = (page - 1) * limit;

    const where = search ? {
      OR: [
        { title: { contains: search, mode: 'insensitive' as const } },
        { slug: { contains: search, mode: 'insensitive' as const } },
      ],
    } : {};

    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.product.count({ where }),
    ]);

    const totalPages = Math.ceil(total / limit);

    return successResponse({
      items: products,
      pagination: {
        total,
        page,
        limit,
        totalPages,
      }
    }, 'Products retrieved successfully');
  } catch (error: any) {
    return errorResponse(error.message, 500);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body: ICreateProduct = await req.json();
    if (!body.slug || !body.title) {
      return errorResponse('Slug and Title are required', 400);
    }
    const newProduct = await productService.create(body);
    return successResponse(newProduct, 'Product created successfully', 201);
  } catch (error: any) {
    if (error.code === 'P2002') return errorResponse('Slug already exists', 400);
    return errorResponse(error.message, 500);
  }
}
