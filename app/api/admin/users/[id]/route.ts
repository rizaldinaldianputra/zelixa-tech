import { NextRequest } from 'next/server';
import { userService } from '@/services/userService';
import { successResponse, errorResponse } from '@/utils/apiCore';
import { IUpdateUser } from '@/types/user.interface';

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const user = await userService.getUserById(id);
    if (!user) {
      return errorResponse('User not found', 404);
    }
    return successResponse(user, 'User retrieved successfully');
  } catch (error: any) {
    return errorResponse(error.message, 500);
  }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body: IUpdateUser = await req.json();
    const updatedUser = await userService.updateUser(id, body);
    return successResponse(updatedUser, 'User updated successfully');
  } catch (error: any) {
    if (error.code === 'P2025') {
      return errorResponse('User not found', 404);
    }
    return errorResponse(error.message, 500);
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await userService.deleteUser(id);
    return successResponse(null, 'User deleted successfully');
  } catch (error: any) {
    if (error.code === 'P2025') {
      return errorResponse('User not found', 404);
    }
    return errorResponse(error.message, 500);
  }
}
