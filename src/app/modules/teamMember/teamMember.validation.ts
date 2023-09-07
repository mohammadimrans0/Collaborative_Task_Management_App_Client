import { z } from 'zod'

// Validation schema for creating a new team member
const createTeamMember = z.object({
  userId: z.string(), // You may want to add validation for userId
  teamId: z.string(), // You may want to add validation for teamId
  // You can add validation for other fields if needed
})

// Validation schema for updating an existing team member
const updateTeamMember = z.object({
  userId: z.string().optional(), // You may want to add validation for userId
  teamId: z.string().optional(), // You may want to add validation for teamId
  // You can add validation for other fields if needed
})

export const TeamMemberValidation = { createTeamMember, updateTeamMember }
