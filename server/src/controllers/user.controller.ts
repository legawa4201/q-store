import { Request, Response, NextFunction } from "express";

import { AppDataSource } from "../config/dataSource";
import { User } from "../entity/User";
import { Order } from "../entity/Order";

const userRepostitory = AppDataSource.getRepository(User);
const orderRepository = AppDataSource.getRepository(Order)

class UserController {

    async register(req: Request, res: Response, next: NextFunction) {
        try {
        } catch (error) {
            next(error);
        }
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
        } catch (error) {
            next(error);
        }
    }

    async unregister(req: Request, res: Response, next: NextFunction) {
        try {
        } catch (error) {
            next(error);
        }
    }

    async orderProduct(req: Request, res: Response, next: NextFunction) {
        try {
        } catch (error) {
            next(error);
        }
    }

    async updateQuantity(req: Request, res: Response, next: NextFunction) {
        try {
        } catch (error) {
            next(error);
        }
    }

    async unorderProduct(req: Request, res: Response, next: NextFunction) {
        try {
        } catch (error) {
            next(error);
        }
    }

    async getUser(field: { email?: string, id?: number; }) {
        try {
        } catch (error) {
            throw error
        }
    }
}

export default new UserController();