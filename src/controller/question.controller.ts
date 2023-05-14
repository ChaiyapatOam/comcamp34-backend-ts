import * as questionService from "@/services/question.service";
import { Request, Response } from "express";

export const updateQuestion1 = async (req: Request, res: Response) => {
  try {
    const uid = req.uid;
    const body = req.body;
    const result = await questionService.updateQuestion1(uid, body);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    res.status(500).send({ success: false });
  }
};

export const getQuestion1 = async (req: Request, res: Response) => {
  try {
    const uid = req.uid;
    const result = await questionService.getQuestion1(uid);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    res.status(500).send({ success: false });
  }
};

export const updateQuestion2 = async (req: Request, res: Response) => {
  try {
    const uid = req.uid;
    const body = req.body;
    const result = await questionService.updateQuestion2(uid, body);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    res.status(500).send({ success: false });
  }
};

export const getQuestion2 = async (req: Request, res: Response) => {
  try {
    const uid = req.uid;
    const result = await questionService.getQuestion2(uid);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    res.status(500).send({ success: false });
  }
};
