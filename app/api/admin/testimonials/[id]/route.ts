import { NextRequest } from 'next/server';
import { testimonialService } from '@/services/testimonialService';
import { successResponse, errorResponse } from '@/utils/apiCore';
import { IUpdateTestimonial } from '@/types/testimonial.interface';

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const item = await testimonialService.getById(id);
    if (!item) return errorResponse('Testimonial not found', 404);
    return successResponse(item, 'Testimonial retrieved successfully');
  } catch (error: any) {
    return errorResponse(error.message, 500);
  }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body: IUpdateTestimonial = await req.json();
    const updatedItem = await testimonialService.update(id, body);
    return successResponse(updatedItem, 'Testimonial updated successfully');
  } catch (error: any) {
    return errorResponse(error.message, 500);
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await testimonialService.delete(id);
    return successResponse(null, 'Testimonial deleted successfully');
  } catch (error: any) {
    return errorResponse(error.message, 500);
  }
}
