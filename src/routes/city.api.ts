import { Router } from 'express';
import * as cityController from '../controllers/city.controller';

export const router = Router();

router.get('/city/all', cityController.all);

export default router;
