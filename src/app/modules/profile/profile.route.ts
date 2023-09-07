import express from 'express'
import validateRequest from '../../middleware/validateRequest'
import { ProfileController } from './profile.controller'
import { ProfileValidation } from './profile.validation'
const router = express.Router()

router.get('/:id', ProfileController.getDataById)

router.post(
  '/',
  validateRequest(ProfileValidation.createProfile),
  ProfileController.insertIntoDB
)

router.patch(
  '/:id',
    validateRequest(ProfileValidation.updateProfile),
  ProfileController.updateOneInDB
)

router.delete(
  '/:id',
  ProfileController.deleteByIdFromDB
)

export const ProfileRoutes = router
