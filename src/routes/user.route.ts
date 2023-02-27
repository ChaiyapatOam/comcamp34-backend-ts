import express, { Express, Router } from "express";
const router: Router = express.Router();
import * as userController from "@/controller/user.controller";

router.route("/users").get(userController.testUser).post(userController.createUser);

export const userRoute : Router = router;