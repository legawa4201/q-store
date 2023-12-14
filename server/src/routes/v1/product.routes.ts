import { Router } from "express";

import productController from "../../controllers/product.controller";

const productRouter: Router = Router();

productRouter.route(`/`)
.get(productController.getProducts)
.post(productController.addProduct);

productRouter.route(`/:id`)
.get(productController.getProduct)
.put(productController.editProduct)
.delete(productController.deleteProduct);

export default productRouter;