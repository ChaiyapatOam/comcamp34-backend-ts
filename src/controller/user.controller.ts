import { Request, Response } from "express";
import * as userService from "@/services/user.service";

export const testUser = async (req: Request, res: Response) => {
  res.status(200).send("Hello User!");
};

export const createUser = async (req: Request, res: Response) => {
  try {
    // idToken from headers
    const idToken = req.headers["id-token"] as string;
    if (!idToken) {
      res.status(403).send("No id-token Provide");
    }
    // Validate ID Token and Return UID
    const token = await userService.generateToken(idToken);
    res.status(200).send({ success: true, token: token });
  } catch (error) {}
};
