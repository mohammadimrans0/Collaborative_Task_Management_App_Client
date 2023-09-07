import prisma from '../../../shared/prisma'
import { TeamMember } from '@prisma/client'

const insertIntoDB = async (TeamMemberData: TeamMember): Promise<TeamMember> => {
  const result = await prisma.teamMember.create({
    data: TeamMemberData,
  })

  return result
}

const getDataById = async (id: string): Promise<TeamMember | null> => {
  const result = await prisma.teamMember.findUnique({
    where: {
      id,
    },
  })

  return result
}

const updateOneInDB = async (
  id: string,
  payload: Partial<TeamMember>
): Promise<TeamMember> => {
  const result = await prisma.teamMember.update({
    where: {
      id,
    },
    data: payload,
  })
  return result
}

const deleteByIdFromDB = async (id: string): Promise<TeamMember> => {
  const result = await prisma.teamMember.delete({
    where: {
      id,
    },
  })
  return result
}

export const TeamMemberService = {
  insertIntoDB,
  getDataById,
  updateOneInDB,
  deleteByIdFromDB,
}
