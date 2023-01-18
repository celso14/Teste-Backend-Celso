import { z } from 'zod';

export const updateProductBody = z.object({
    id: z.string().uuid(),
    name:       z.string().optional(),
    category:   z.string().optional(),
    quantity:   z.number().nonnegative().optional(),
    status: z.boolean().optional(),
    updated_at: z.date()
}, )