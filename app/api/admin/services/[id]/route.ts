import { NextRequest } from 'next/server';
import { frontServiceService } from '@/services/frontServiceService';
import { successResponse, errorResponse } from '@/utils/apiCore';
import { IUpdateService } from '@/types/service.interface';

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const item = await frontServiceService.getById(id);
    if (!item) return errorResponse('Service item not found', 404);
    return successResponse(item, 'Service item retrieved successfully');
  } catch (error: any) {
    return errorResponse(error.message, 500);
  }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body: IUpdateService = await req.json();
    const updatedItem = await frontServiceService.update(id, body);
    return successResponse(updatedItem, 'Service item updated successfully');
  } catch (error: any) {
    return errorResponse(error.message, 500);
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await frontServiceService.delete(id);
    return successResponse(null, 'Service item deleted successfully');
  } catch (error: any) {
    return errorResponse(error.message, 500);
  }
}
