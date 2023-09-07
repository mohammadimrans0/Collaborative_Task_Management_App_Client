import { User } from '@prisma/client'
import { Request, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import pick from '../../../shared/pick'
import sendResponse from '../../../shared/sendResponse'
import { UserService } from './user.service'
import { UserFilterableFields } from './user.constant'

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.insertIntoDB(req.body)
  sendResponse<User>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Created Successfully!!',
    data: result,
  })
})

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, UserFilterableFields)
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder'])

  const result = await UserService.getAllFromDB(filters, options)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All User fetched!!',
    meta: result.meta,
    data: result.data,
  })
})

const getDataById = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getDataById(req.params.id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single user fetched!!',
    data: result,
  })
})

const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await UserService.updateOneInDB(id, req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User updated successfully',
    data: result,
  })
})

const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await UserService.deleteByIdFromDB(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User deleted successfully',
    data: result,
  })
})

export const UserController = {
  insertIntoDB,
  getAllFromDB,
  getDataById,
  updateOneInDB,
  deleteByIdFromDB,
}
