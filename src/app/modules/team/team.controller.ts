import { Team } from '@prisma/client'
import { Request, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { TeamService } from './team.service'

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await TeamService.insertIntoDB(req.body)
  sendResponse<Team>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Team Created Successfully!!',
    data: result,
  })
})

const getDataById = catchAsync(async (req: Request, res: Response) => {
  const result = await TeamService.getDataById(req.params.id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single Team fetched!!',
    data: result,
  })
})

const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await TeamService.updateOneInDB(id, req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Team updated successfully',
    data: result,
  })
})

const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await TeamService.deleteByIdFromDB(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Team deleted successfully',
    data: result,
  })
})

export const TeamController = {
  insertIntoDB,
  getDataById,
  updateOneInDB,
  deleteByIdFromDB,
}
