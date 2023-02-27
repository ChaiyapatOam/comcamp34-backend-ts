import express, { Express, Router } from "express";
import { userRoute } from "./user.route";
import { pageRoute } from "./page.route";
import { authJwt } from "@/middleware/authJwt";
const router: Router = express.Router();

// If want to use Versioning the API
const api = process.env.apiVersion || "/api";
router.use(`${api}`, userRoute);
router.use(`${api}`, authJwt, pageRoute);

export const indexRouter: Router = router;
