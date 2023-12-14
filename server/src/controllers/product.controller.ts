import { Request, Response, NextFunction } from "express";

import { AppDataSource } from "../config/dataSource";
import { Product } from "../entity/Product";

const productRepository = AppDataSource.getRepository(Product);

class ProductController {

    async getProducts(req: Request, res: Response, next: NextFunction) {
        try {
        } catch (error) {
            next(error)
        }
    }

    async getProduct(req: Request, res: Response, next: NextFunction) {
        try {
        } catch (error) {
            next(error)
        }
    }

    async addProduct(req: Request, res: Response, next: NextFunction) {
        try {
        } catch (error) {
            next(error)
        }
    }

    async editProduct(req: Request, res: Response, next: NextFunction) {
        try {
        } catch (error) {
            next(error)
        }
    }

    async deleteProduct(req: Request, res: Response, next: NextFunction) {
        try {
        } catch (error) {
            next(error)
        }
    }
}

export default new ProductController()