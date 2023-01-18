import { z } from 'zod';

export const deleteProductBody = z.object({
    id: z.string().uuid(),
    status: z.boolean(),
    deleted_at: z.date()
}, )