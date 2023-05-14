import { Request, Response } from "express";
import * as pageService from "@/services/page.service";

export const testPage = (req: Request, res: Response) => {
  res.status(200).send("Test Page");
};

export const updateConsent = async (req: Request, res: Response) => {
  try {
    const uid = req.uid;
    const result = await pageService.updateConsent(uid);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};

export const getConsent = async (req: Request, res: Response) => {
  try {
    const uid = req.uid;
    const result = await pageService.getConsent(uid);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    res.status(500).send({ success: false });
  }
};
export const updatePersonal = async (req: Request, res: Response) => {
  try {
    const uid = req.uid;
    const body = req.body;
    const result = await pageService.updatePersonal(uid, body);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};

export const getPersonal = async (req: Request, res: Response) => {
  try {
    const uid = req.uid;
    const result = await pageService.getPersonal(uid);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    res.status(500).send({ success: false });
  }
};

export const updateEducation = async (req: Request, res: Response) => {
  try {
    const uid = req.uid;
    const body = req.body;
    const result = await pageService.updateEducation(uid, body);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};

export const getEducation = async (req: Request, res: Response) => {
  try {
    const uid = req.uid;
    const result = await pageService.getEducation(uid);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    res.status(500).send({ success: false });
  }
};

export const updateInterest = async (req: Request, res: Response) => {
  try {
    const uid = req.uid;
    const body = req.body;
    const result = await pageService.updateInterest(uid, body);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    res.status(500).send({ success: false });
  }
};

export const getInterest = async (req: Request, res: Response) => {
  try {
    const uid = req.uid;
    const result = await pageService.getInterest(uid);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    res.status(500).send({ success: false });
  }
};

export const updateParentData = async (req: Request, res: Response) => {
  try {
    const uid = req.uid;
    const body = req.body;
    const result = await pageService.updateParentData(uid, body);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    res.status(500).send({ success: false });
  }
};

export const getParentData = async (req: Request, res: Response) => {
  try {
    const uid = req.uid;
    const result = await pageService.getParentData(uid);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    res.status(500).send({ success: false });
  }
};

export const submit = async (req: Request, res: Response) => {
  try {
    const uid = req.uid;
    const result = await pageService.updateSubmit(uid);
    if (result) {
      const count = await pageService.countSubmitted();
      pageService.sendDiscordHook(result, count);

      res.status(200).send({ success: true, data: result });
    } else {
      res.status(405).send({ success: false, message: "User not valid Form" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};
