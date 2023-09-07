import express from 'express'
import { UserRoutes } from '../modules/user/user.route'
import { ProfileRoutes } from '../modules/profile/profile.route'

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
    path: '/users',
    route: UserRoutes
  },
  {
    path: '/users',
    route: UserRoutes
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
