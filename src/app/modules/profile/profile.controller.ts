import { Profile } from '@prisma/client'
import { Request, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { ProfileService } from './profile.service'

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await ProfileService.insertIntoDB(req.body)
  sendResponse<Profile>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Profile Created Successfully!!',
    data: result,
  })
})

const getDataById = catchAsync(async (req: Request, res: Response) => {
  const result = await ProfileService.getDataById(req.params.id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single Profile fetched!!',
    data: result,
  })
})

const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await ProfileService.updateOneInDB(id, req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Profile updated successfully',
    data: result,
  })
})

const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await ProfileService.deleteByIdFromDB(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Profile deleted successfully',
    data: result,
  })
})

export const ProfileController = {
  insertIntoDB,
  getDataById,
  updateOneInDB,
  deleteByIdFromDB,
}
