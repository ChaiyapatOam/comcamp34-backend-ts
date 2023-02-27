import { File, Question, User } from "@/lib/prisma";
import jwt from "jsonwebtoken";
import admin from "firebase-admin";

exports.validateIDToken = async (idToken: string) => {
  if (!idToken) throw new Error("NO id-token Provided");
};

export const generateToken = async (uid: string) => {
  const secret = process.env.JWT_SECRET as string;
  const token = jwt.sign({ uid: uid }, secret, {
    expiresIn: 60 * 60 * 24, // 1 days
  });
  return token;
};

export const validateIDToken = async (idToken: string) => {
  if (!idToken) throw new Error("No id-token ");
  // Firebase Validate Token
  try {
    const result = await admin.auth().verifyIdToken(idToken);
    console.log(result);

    return result.uid;
  } catch (error) {
    throw new Error("Validate Token Error");
  }
};

export const getUserByUid = async (uid: string) => {
  if (!uid) throw new Error("No Uid Provide");
  const user = await User.findFirst({
    where: {
      uid: uid,
    },
  });
  return user;
};

//Create uid in 3 Table
export const createUser = async (uid: string) => {
  if (!uid) throw new Error("No Uid Provide");
  const result = await User.create({
    data: {
      uid: uid,
    },
  });
  await Question.create({
    data: { uid: uid },
  });
  await File.create({
    data: { uid: uid },
  });
  return result;
};

export const getPage = async (uid: string) => {
  if (!uid) throw new Error("No Uid Provide");
  const result = await User.findUnique({
    where: {
      uid: uid,
    },
    select: {
      page: true,
    },
  });
  if (!result) {
    return null;
  }
  return result.page;
};
