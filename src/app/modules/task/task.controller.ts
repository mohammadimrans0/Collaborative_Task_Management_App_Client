import { Task } from '@prisma/client'
import { Request, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import pick from '../../../shared/pick'
import sendResponse from '../../../shared/sendResponse'
import { TaskService } from './task.service'
import { TaskFilterableFields } from './task.constant'

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await TaskService.insertIntoDB(req.body)
  sendResponse<Task>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Task Created Successfully!!',
    data: result,
  })
})

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, TaskFilterableFields)
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder'])

  const result = await TaskService.getAllFromDB(filters, options)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Task fetched!!',
    meta: result.meta,
    data: result.data,
  })
})

const getDataById = catchAsync(async (req: Request, res: Response) => {
  const result = await TaskService.getDataById(req.params.id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single Task fetched!!',
    data: result,
  })
})

const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await TaskService.updateOneInDB(id, req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Task updated successfully',
    data: result,
  })
})

const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await TaskService.deleteByIdFromDB(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Task deleted successfully',
    data: result,
  })
})

export const TaskController = {
  insertIntoDB,
  getAllFromDB,
  getDataById,
  updateOneInDB,
  deleteByIdFromDB,
}
