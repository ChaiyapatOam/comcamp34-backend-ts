import express, { Express, Router } from "express";
const router: Router = express.Router();
import * as pageController from "@/controller/page.controller";


router.route("/pages").get(pageController.testPage);

// Consent
router.route("/pages/0").post(pageController.updateConsent);

export const pageRoute: Router = router;
