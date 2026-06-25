import { NextRequest } from 'next/server';
import { testimonialService } from '@/services/testimonialService';
import { successResponse, errorResponse } from '@/utils/apiCore';
import { ICreateTestimonial } from '@/types/testimonial.interface';

export async function GET(req: NextRequest) {
  try {
    const items = await testimonialService.getAll();
    return successResponse(items, 'Testimonials retrieved successfully');
  } catch (error: any) {
    return errorResponse(error.message, 500);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body: ICreateTestimonial = await req.json();
    if (!body.name || !body.text) {
      return errorResponse('Name and Text are required', 400);
    }
    const newItem = await testimonialService.create(body);
    return successResponse(newItem, 'Testimonial created successfully', 201);
  } catch (error: any) {
    return errorResponse(error.message, 500);
  }
}
