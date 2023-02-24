import express, { Express, Router } from "express";
const router: Router = express.Router();
import { testUser } from "@/controller/user.controller";

router.route("/users").get(testUser);

export const userRoute : Router = router;