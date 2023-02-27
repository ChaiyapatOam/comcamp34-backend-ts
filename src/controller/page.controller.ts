import { Request, Response } from "express";
import * as pageService from "@/services/page.service";

export const testPage = (req: Request, res: Response) => {
  res.status(200).send("Test Page");
};

export const updateConsent = async (req: Request, res: Response) => {
  const uid = req.uid;
  const result = await pageService.updateConsent(uid);
  res.status(200).send({ success: true, data: result });
};
