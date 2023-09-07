/* eslint-disable @typescript-eslint/no-explicit-any */

import { paginationHelpers } from '../../../helpers/paginationHelper'
import { IGenericResponse } from '../../../interfaces/common'
import { IPaginationOptions } from '../../../interfaces/pagination'
import prisma from '../../../shared/prisma'
import { ITaskFilterRequest } from './task.interface'
import { TaskSearchableFields } from './task.constant'
import { Prisma, Task } from '@prisma/client'

const insertIntoDB = async (TaskData: Task): Promise<Task> => {
  const result = await prisma.task.create({
    data: TaskData,
  })

  return result
}

const getAllFromDB = async (
  filters: ITaskFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<Task[]>> => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options)
  const { searchTerm, ...filterData } = filters
  const andConditions = []

  if (searchTerm) {
    andConditions.push({
      OR: TaskSearchableFields.map(field => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      })),
    })
  }

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map(key => ({
        [key]: {
          equals: (filterData as any)[key],
        },
      })),
    })
  }

  const whereConditions: Prisma.TaskWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {}

  const result = await prisma.task.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? {
            [options.sortBy]: options.sortOrder,
          }
        : {
            createdAt: 'desc',
          },
  })

  const total = await prisma.task.count()

  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  }
}

const getDataById = async (id: string): Promise<Task | null> => {
  const result = await prisma.task.findUnique({
    where: {
      id,
    },
  })

  return result
}

const updateOneInDB = async (
  id: string,
  payload: Partial<Task>
): Promise<Task> => {
  const result = await prisma.task.update({
    where: {
      id,
    },
    data: payload,
  })
  return result
}

const deleteByIdFromDB = async (id: string): Promise<Task> => {
  const result = await prisma.task.delete({
    where: {
      id,
    },
  })
  return result
}

export const TaskService = {
  insertIntoDB,
  getAllFromDB,
  getDataById,
  updateOneInDB,
  deleteByIdFromDB,
}
