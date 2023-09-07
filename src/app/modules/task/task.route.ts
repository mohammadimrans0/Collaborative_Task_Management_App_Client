import express from 'express'
import validateRequest from '../../middleware/validateRequest'
import { TaskValidation } from './task.validation'
import { TaskController } from './task.controller'

const router = express.Router()

router.get('/', TaskController.getAllFromDB)

router.get('/:id', TaskController.getDataById)

router.post(
  '/',
  validateRequest(TaskValidation.createTask),
 TaskController.insertIntoDB
)

router.patch(
  '/:id',
  validateRequest(TaskValidation.updateTask),
 TaskController.updateOneInDB
)

router.delete('/:id', TaskController.deleteByIdFromDB)

export const TaskRoutes = router
