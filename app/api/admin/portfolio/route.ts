import { NextRequest } from 'next/server';
import { portfolioService } from '@/services/portfolioService';
import { successResponse, errorResponse } from '@/utils/apiCore';
import { ICreatePortfolio } from '@/types/portfolio.interface';

export async function GET(req: NextRequest) {
  try {
    const items = await portfolioService.getAll();
    return successResponse(items, 'Portfolio retrieved successfully');
  } catch (error: any) {
    return errorResponse(error.message, 500);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body: ICreatePortfolio = await req.json();
    if (!body.slug || !body.title) {
      return errorResponse('Slug and Title are required', 400);
    }
    const newItem = await portfolioService.create(body);
    return successResponse(newItem, 'Portfolio item created successfully', 201);
  } catch (error: any) {
    if (error.code === 'P2002') return errorResponse('Slug already exists', 400);
    return errorResponse(error.message, 500);
  }
}
