import { z } from 'zod'

// Validation schema for creating a new team
const createTeam = z.object({
  name: z.string().min(4).max(50),
  // You can add validation for other fields like 'members' and 'tasks' if needed
})

// Validation schema for updating an existing team
const updateTeam = z.object({
  name: z.string().min(4).max(50).optional(),
  // You can add validation for other fields like 'members' and 'tasks' if needed
})

export const TeamValidation = { createTeam, updateTeam }
