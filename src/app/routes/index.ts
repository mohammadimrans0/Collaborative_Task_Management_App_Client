import express from 'express'
import { UserRoutes } from '../modules/user/user.route'
import { ProfileRoutes } from '../modules/profile/profile.route'
import { TeamRoutes } from '../modules/team/team.route'
import { TeamMemberRoutes } from '../modules/teamMember/teamMember.route'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes
  },
  {
    path: '/profile',
    route: ProfileRoutes
  },
  {
    path: '/team',
    route: TeamRoutes
  },
  {
    path: '/team-member',
    route: TeamMemberRoutes
  },
  {
    path: '/task',
    route: TeamMemberRoutes
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
