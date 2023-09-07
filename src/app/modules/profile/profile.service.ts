import prisma from '../../../shared/prisma'
import {Profile } from '@prisma/client'

const insertIntoDB = async (ProfileData: Profile): Promise<Profile> => {
  const result = await prisma.profile.create({
    data: ProfileData,
  })

  return result
}

const getDataById = async (id: string): Promise<Profile | null> => {
  const result = await prisma.profile.findUnique({
    where: {
      id,
    },
  })

  return result
}

const updateOneInDB = async (
  id: string,
  payload: Partial<Profile>
): Promise<Profile> => {
  const result = await prisma.profile.update({
    where: {
      id,
    },
    data: payload,
  })
  return result
}

const deleteByIdFromDB = async (id: string): Promise<Profile> => {
  const result = await prisma.profile.delete({
    where: {
      id,
    },
  })
  return result
}

export const ProfileService = {
  insertIntoDB,
  getDataById,
  updateOneInDB,
  deleteByIdFromDB,
}
