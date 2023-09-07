import express from 'express'
// import { ENUM_USER_ROLE } from '../../../enums/user'
// import auth from '../../middleware/auth'
import validateRequest from '../../middleware/validateRequest'
import { UserValidation } from './user.validation'
import { UserController } from './user.controller'
const router = express.Router()

router.get('/', UserController.getAllFromDB)
router.get('/:id', UserController.getDataById)
router.post(
  '/',
  validateRequest(UserValidation.create),
  UserController.insertIntoDB
)

router.patch(
  '/:id',
  //   validateRequest(AcademicSemesterValidation.update),
  //   auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  UserController.updateOneInDB
)

router.delete(
  '/:id',
  //   auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  UserController.deleteByIdFromDB
)

export const UserRoutes = router
