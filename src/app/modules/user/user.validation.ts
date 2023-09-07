import { z } from 'zod'

// Validation schema for creating a new user
const createUser = z.object({
  username: z.string().min(4).max(20),
  email: z.string().email(),
  password: z.string().min(6),
  // You can add validation for other fields like 'Profile' and 'TeamMember' if needed
})

// Validation schema for updating an existing user
const updateUser = z.object({
  username: z.string().min(4).max(20).optional(),
  email: z.string().email().optional(),
  password: z.string().min(6).optional(),
  // You can add validation for other fields like 'Profile' and 'TeamMember' if needed
})

export const UserValidation = {createUser, updateUser}
