import { TeamMember } from '@prisma/client'
import { Request, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { TeamMemberService } from './teamMember.service'

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await TeamMemberService.insertIntoDB(req.body)
  sendResponse<TeamMember>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Team Member Created Successfully!!',
    data: result,
  })
})

const getDataById = catchAsync(async (req: Request, res: Response) => {
  const result = await TeamMemberService.getDataById(req.params.id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single Team Member fetched!!',
    data: result,
  })
})

const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await TeamMemberService.updateOneInDB(id, req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Team Member updated successfully',
    data: result,
  })
})

const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await TeamMemberService.deleteByIdFromDB(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Team Member deleted successfully',
    data: result,
  })
})

export const TeamMemberController = {
  insertIntoDB,
  getDataById,
  updateOneInDB,
  deleteByIdFromDB,
}
