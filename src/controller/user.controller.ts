import { Request, Response } from "express";

export const testUser = async (req: Request, res: Response) => {
  res.status(200).send("Hello User!");
};

export const createUser = async (req: Request, res: Response) => {
  try {
    // idToken from headers
    const idToken = req.headers["id-token"];
    if (!idToken) {
      res.status(403).send("No id-token Provide");
    }
  } catch (error) {}
};
