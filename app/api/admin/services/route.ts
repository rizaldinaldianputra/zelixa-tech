import { NextRequest } from 'next/server';
import { frontServiceService } from '@/services/frontServiceService';
import { successResponse, errorResponse } from '@/utils/apiCore';
import { ICreateService } from '@/types/service.interface';

export async function GET(req: NextRequest) {
  try {
    const items = await frontServiceService.getAll();
    return successResponse(items, 'Services retrieved successfully');
  } catch (error: any) {
    return errorResponse(error.message, 500);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body: ICreateService = await req.json();
    if (!body.title) {
      return errorResponse('Title is required', 400);
    }
    const newItem = await frontServiceService.create(body);
    return successResponse(newItem, 'Service item created successfully', 201);
  } catch (error: any) {
    return errorResponse(error.message, 500);
  }
}
