import { NextRequest } from 'next/server';
import { userService } from '@/services/userService';
import { successResponse, errorResponse } from '@/utils/apiCore';
import { ICreateUser } from '@/types/user.interface';

export async function GET(req: NextRequest) {
  try {
    const users = await userService.getAllUsers();
    return successResponse(users, 'Users retrieved successfully');
  } catch (error: any) {
    return errorResponse(error.message, 500);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body: ICreateUser = await req.json();
    
    if (!body.email) {
      return errorResponse('Email is required', 400);
    }
    
    const newUser = await userService.createUser(body);
    return successResponse(newUser, 'User created successfully', 201);
  } catch (error: any) {
    if (error.code === 'P2002') {
      return errorResponse('Email already exists', 400);
    }
    return errorResponse(error.message, 500);
  }
}
