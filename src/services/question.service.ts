import { File, Question, User } from "@/lib/prisma";
import { QuestionPage1, QuestionPage2 } from "@/types/RegistrationType";
export const updateQuestion1 = async (uid: string, body: QuestionPage1) => {
  await User.update({
    where: {
      uid: uid,
    },
    data: { page: 6 },
  });
  const result = await Question.update({
    where: {
      uid: uid,
    },
    data: {
      q1: body.q1,
      q2: body.q2,
      q3: body.q3,
    },
  });
  return result;
};

export const getQuestion1 = async (uid: string) => {
  const result = await Question.findUnique({
    where: {
      uid: uid,
    },
    select: {
      q1: true,
      q2: true,
      q3: true,
    },
  });
  return result;
};

export const updateQuestion2 = async (uid: string, body: QuestionPage2) => {
  const result = await Question.update({
    where: {
      uid: uid,
    },
    data: {
      q4: body.q4,
      q5: body.q5,
      q6: body.q6,
      q7: body.q7,
    },
  });
  return result;
};

export const getQuestion2 = async (uid: string) => {
  const result = await Question.findUnique({
    where: {
      uid: uid,
    },
    select: {
      q4: true,
      q5: true,
      q6: true,
      q7: true,
    },
  });
  return result;
};
