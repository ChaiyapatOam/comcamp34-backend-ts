import express, { Express, Router } from "express";
import { userRoute } from "./user.route";
const router: Router = express.Router();

// If want to use Versioning the API
const api = process.env.apiVersion || "/api";
router.use(`${api}`, userRoute);

export const indexRouter: Router = router;
