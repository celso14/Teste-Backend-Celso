import { Router } from 'express';
import * as productController from '../controllers/product.controller';

export const router = Router();

router.get('/product/all', productController.all);
router.post('/product/create', productController.create);
router.put('/product/update', productController.update);
router.post('/product/remove', productController.remove);

export default router;
