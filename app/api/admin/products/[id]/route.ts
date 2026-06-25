import { NextRequest } from 'next/server';
import { productService } from '@/services/productService';
import { successResponse, errorResponse } from '@/utils/apiCore';
import { IUpdateProduct } from '@/types/product.interface';

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const product = await productService.getById(id);
    if (!product) return errorResponse('Product not found', 404);
    return successResponse(product, 'Product retrieved successfully');
  } catch (error: any) {
    return errorResponse(error.message, 500);
  }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body: IUpdateProduct = await req.json();
    const updatedProduct = await productService.update(id, body);
    return successResponse(updatedProduct, 'Product updated successfully');
  } catch (error: any) {
    return errorResponse(error.message, 500);
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await productService.delete(id);
    return successResponse(null, 'Product deleted successfully');
  } catch (error: any) {
    return errorResponse(error.message, 500);
  }
}
