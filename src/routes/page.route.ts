import express, { Express, Router } from "express";
const router: Router = express.Router();
import * as pageController from "@/controller/page.controller";
import * as fileController from "@/controller/file.controller";
import * as questionController from "@/controller/question.controller";

router.route("/pages").get(pageController.testPage);

// Consent
router.route("/pages/0").post(pageController.updateConsent);

// PersonalInfo
router
  .route("/pages/1")
  .post(pageController.updatePersonal)
  .get(pageController.getPersonal);

// Education
router
  .route("/pages/2")
  .post(pageController.updateEducation)
  .get(pageController.getEducation);

// Interest
router
  .route("/pages/3")
  .post(pageController.updateInterest)
  .get(pageController.getInterest);

// ParentData
router
  .route("/pages/4")
  .post(pageController.updateParentData)
  .get(pageController.getParentData);

// UploadFile
router
  .route("/pages/5")
  .post(fileController.updateUploadFile)
  .get(fileController.getUploadFile);

// Question1
router
  .route("/pages/6")
  .post(questionController.updateQuestion1)
  .get(questionController.getQuestion1);

// Question2
router
  .route("/pages/7")
  .post(questionController.updateQuestion2)
  .get(questionController.getQuestion2);

// Submit
router.route("/pages/submit").post(pageController.submit);

export const pageRoute: Router = router;
