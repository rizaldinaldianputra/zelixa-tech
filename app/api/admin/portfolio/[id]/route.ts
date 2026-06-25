import { NextRequest } from 'next/server';
import { portfolioService } from '@/services/portfolioService';
import { successResponse, errorResponse } from '@/utils/apiCore';
import { IUpdatePortfolio } from '@/types/portfolio.interface';

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const item = await portfolioService.getById(id);
    if (!item) return errorResponse('Portfolio item not found', 404);
    return successResponse(item, 'Portfolio item retrieved successfully');
  } catch (error: any) {
    return errorResponse(error.message, 500);
  }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body: IUpdatePortfolio = await req.json();
    const updatedItem = await portfolioService.update(id, body);
    return successResponse(updatedItem, 'Portfolio item updated successfully');
  } catch (error: any) {
    return errorResponse(error.message, 500);
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await portfolioService.delete(id);
    return successResponse(null, 'Portfolio item deleted successfully');
  } catch (error: any) {
    return errorResponse(error.message, 500);
  }
}
