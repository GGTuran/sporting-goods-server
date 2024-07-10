import { z } from "zod"

const createCategoryZod = z.object({
    name: z.string({ required_error: 'Name is required' }),

    description: z.string({ required_error: 'Description is required' }),
})
const updateCategoryZod = z.object({
    name: z.string().optional(),

    description: z.string().optional(),
})

export const categoryZodValidation = {
    createCategoryZod,
    updateCategoryZod
}