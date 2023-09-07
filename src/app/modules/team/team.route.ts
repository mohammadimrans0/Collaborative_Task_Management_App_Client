import express from 'express'
import validateRequest from '../../middleware/validateRequest'
import { TeamController } from './team.controller'
import { TeamValidation } from './team.validation'

const router = express.Router()

router.get('/:id', TeamController.getDataById)

router.post(
  '/',
  validateRequest(TeamValidation.createTeam),
  TeamController.insertIntoDB
)

router.patch(
  '/:id',
  validateRequest(TeamValidation.updateTeam),
  TeamController.updateOneInDB
)

router.delete('/:id', TeamController.deleteByIdFromDB)

export const TeamRoutes = router
