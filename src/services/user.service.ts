import { User } from "@/lib/prisma";
import jwt, { JwtPayload } from "jsonwebtoken";
exports.validateIDToken = async (idToken: string) => {
  if (!idToken) throw new Error("NO id-token Provided");
};

export const generateToken = async(uid: string) => {
  const secret = process.env.JWT_SECRET as string;
  const token = jwt.sign({ uid: uid }, secret, {
    expiresIn: 60 * 60 * 24, // 1 days
  });
  return token;
};

exports.getUserByUid = async (uid: string) => {
  if (!uid) throw new Error("No Uid Provide");
  const user = await User.findFirst({
    where: {
      uid: uid,
    },
  });
  return user;
};
