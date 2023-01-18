import { z } from 'zod';

export const createProductBody = z.object({
    name:       z.string(),
    category:   z.string(),
    quantity:   z.number().nonnegative(),
    status: z.boolean(),
    updated_at: z.date(),
    deleted_at: z.date()
}, )