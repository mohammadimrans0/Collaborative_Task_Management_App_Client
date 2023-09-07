import { TaskStatus } from '@prisma/client'
import { z } from 'zod'

// Validation schema for creating a new task
const createTask = z.object({
  title: z.string().min(5).max(100),
  description: z.string().max(1000).optional(),
  dueDate: z.date().optional(),
  assignedTo: z.string().optional(), // You may want to add validation for userId
  teamId: z.string(), // You may want to add validation for teamId
  // You can add validation for other fields if needed
})

// Validation schema for updating an existing task
const updateTask = z.object({
  title: z.string().min(5).max(100).optional(),
  description: z.string().max(1000).optional(),
  dueDate: z.date().optional(),
  status: z
    .enum(
      [...Object.values(TaskStatus)] as [string, ...string[]],
      {}
    )
    .optional(),
  assignedTo: z.string().optional(), // You may want to add validation for userId
  teamId: z.string().optional(), // You may want to add validation for teamId
  // You can add validation for other fields if needed
})

export const TaskValidation = { createTask, updateTask }
