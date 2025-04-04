'use server'

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const getUserByAuthId = async (authId: string) => {
    return await prisma.user.findFirst({where: {authId: authId}})
}

export const createUser = async (authId: string, name: string) => {
    return await prisma.user.create({
        data: {authId, name}
    })
}