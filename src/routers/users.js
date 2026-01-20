import { Router } from "express";
import validations from "../middleware/validations.js";
import UserController from "../controllers/users.js";
const router = Router()

router
    .post("/api/register", validations, UserController.register)
    .post("/api/login", validations, UserController.login)


export default router