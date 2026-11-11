import  express from "express";
const router = express.Router();
import userController from "../controllers/users.js";
router.post("/api/v1/register", userController.register);

export default router;