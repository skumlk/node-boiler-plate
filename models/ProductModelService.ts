
import { Service } from "typedi";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

@Service()
export default class ProductModelService
{
    async list()
    {
        return await prisma.product.findMany({
            include: { Brand: true}
        })
    }

    async get(id: number)
    {
        return await prisma.product.findUnique({
            where: {
                id: Number(id)
            }
        })
    }

    async delete(id: number)
    {
        
    }

    async create()
    {
    }
}