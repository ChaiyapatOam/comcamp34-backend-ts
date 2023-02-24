import { User } from "@/lib/prisma";

exports.validateIDToken = async (idToken: string) => {
  if (!idToken) throw new Error("NO id-token Provided");
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
