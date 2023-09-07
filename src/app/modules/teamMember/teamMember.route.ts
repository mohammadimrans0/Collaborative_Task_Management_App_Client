import express from 'express'
import validateRequest from '../../middleware/validateRequest'
import { TeamMemberController } from './teamMember.controller'
import { TeamMemberValidation } from './teamMember.validation'
const router = express.Router()

router.get('/:id', TeamMemberController.getDataById)

router.post(
  '/',
  validateRequest(TeamMemberValidation.createTeamMember),
  TeamMemberController.insertIntoDB
)

router.patch(
  '/:id',
  validateRequest(TeamMemberValidation.updateTeamMember),
  TeamMemberController.updateOneInDB
)

router.delete('/:id', TeamMemberController.deleteByIdFromDB)

export const TeamMemberRoutes = router
