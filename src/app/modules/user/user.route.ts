import express from 'express'
import validateRequest from '../../middleware/validateRequest'
import { UserValidation } from './user.validation'
import { UserController } from './user.controller'

const router = express.Router()

router.get('/:id', UserController.getDataById)

router.post(
  '/',
  validateRequest(UserValidation.createUser),
  UserController.insertIntoDB
)

router.patch(
  '/:id',
    validateRequest(UserValidation.updateUser),
  UserController.updateOneInDB
)

router.delete(
  '/:id',
  UserController.deleteByIdFromDB
)

export const UserRoutes = router
