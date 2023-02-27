import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export const secret = process.env.JWT_SECRET;

export interface AuthRequest extends Request {
  uid: string;
}

export const authJwt = (req: Request, res: Response, next: NextFunction) => {
  if (!secret) {
    throw new Error("Please Define JWT_SECRET");
  }
  let token = req.headers["access-token"] as string;

  if (!token) {
    return res.status(403).send({
      message: "No Token provided!",
    });
  }
  const decoded = jwt.verify(token, secret) as string;
  req.uid = decoded;

  if (!decoded) {
    return res.status(401).send({
      message: "Unauthorized!",
    });
  }
  next();
};
