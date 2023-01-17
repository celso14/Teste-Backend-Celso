import { Router } from 'express';

export const router = Router();

router.get('/all', productController.all);
router.post('/all', productController.post);
router.put('/all', productController.put);
router.delete('/all', productController.delete);

export default router;
