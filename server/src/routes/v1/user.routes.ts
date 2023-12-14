import { Router } from "express";

import userController from "../../controllers/user.controller";

const userRouter: Router = Router();

userRouter.route(`/order/:ProductId`)
.post(userController.orderProduct)
.patch(userController.updateQuantity)
.delete(userController.unorderProduct)

userRouter.post(`/register`, userController.register);

userRouter.post(`/login`, userController.login);

userRouter.delete(`/:id`, userController.unregister);

export default userRouter;


