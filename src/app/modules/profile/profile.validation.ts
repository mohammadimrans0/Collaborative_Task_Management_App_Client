import { z } from 'zod'

// Validation schema for creating a new profile
const createProfile = z.object({
  bio: z.string().max(255).optional(),
  picture: z.string().url().optional(),
  // userId should not be included in the createProfile schema because it's generated automatically (e.g., with uuid())
})

// Validation schema for updating an existing profile
const updateProfile = z.object({
  bio: z.string().max(255).optional(),
  picture: z.string().url().optional(),
  // userId should not be included in the updateProfile schema to avoid unintentional changes
})

export const ProfileValidation = { createProfile, updateProfile }
