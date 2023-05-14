import { Request, Response } from "express";
import * as fileService from "@/services/file.service";

export const updateUploadFile = async (req: Request, res: Response) => {
  try {
    const uid = req.uid;
    const body = req.body;
    const result = await fileService.updateUploadFile(uid, body);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false });
  }
};

export const getUploadFile = async (req: Request, res: Response) => {
  try {
    const uid = req.uid;
    const result = await fileService.getUploadFile(uid);
    res.status(200).send({ success: true, data: result });
  } catch (error) {
    res.status(500).send({ success: false });
  }
};
