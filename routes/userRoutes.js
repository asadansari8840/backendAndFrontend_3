import express from "express";
const router = express.Router();
import {createUser, deleteUser, getUsers, updateUser} from "../controllers/userController.js";

router.route("/create").post(createUser);
router.route("/users").get(getUsers);
router.route("/user/:id").delete(deleteUser).put(updateUser);
export { router as UserRouter };
