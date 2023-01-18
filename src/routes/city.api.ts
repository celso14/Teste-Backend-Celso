import { Router, Request, Response } from 'express';

export const router = Router();

router.get('/', (req:Request, res: Response) => {
    res.json({
        result: "all cities RJ",
    });
    res.status(200);
});

export default router;
