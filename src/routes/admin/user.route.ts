import { Router } from "express";
import { authorizedMiddleware, isAdmin } from "../../middlewares/authorized.middleware";
import { AdminUserController } from "../../controllers/admin/user.controller";

const adminRouter = Router();
const adminUserController = new AdminUserController();
adminRouter.post("/create", authorizedMiddleware, 
    isAdmin, adminUserController.createUser);
export default adminRouter;