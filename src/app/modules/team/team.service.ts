import prisma from '../../../shared/prisma'
import { Team } from '@prisma/client'

const insertIntoDB = async (TeamData: Team): Promise<Team> => {
  const result = await prisma.team.create({
    data: TeamData,
  })

  return result
}

const getDataById = async (id: string): Promise<Team | null> => {
  const result = await prisma.team.findUnique({
    where: {
      id,
    },
  })

  return result
}

const updateOneInDB = async (
  id: string,
  payload: Partial<Team>
): Promise<Team> => {
  const result = await prisma.team.update({
    where: {
      id,
    },
    data: payload,
  })
  return result
}

const deleteByIdFromDB = async (id: string): Promise<Team> => {
  const result = await prisma.team.delete({
    where: {
      id,
    },
  })
  return result
}

export const TeamService = {
  insertIntoDB,
  getDataById,
  updateOneInDB,
  deleteByIdFromDB,
}
