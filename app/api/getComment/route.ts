import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { connectDB } from "@utils/database";
import { cookies } from "next/headers";

if (!process.env.MONGODB_URL) throw new Error("env error");

export async function GET(req: Request, res: NextApiResponse) {
  const client = await connectDB;
  const db = client.db("test");

  const cookieStore = cookies();
  const number = cookieStore.get("login-number");
  let result;

  if (number === undefined) {
    result = await db
      .collection("comments")
      .find()
      .sort({ date: -1 })
      .toArray();
  } else {
    result = await db
      .collection("comments")
      .aggregate([
        {
          $addFields: {
            item: 1,
            editYn: {
              $cond: {
                if: { $eq: ["$user", number.value] },
                then: "Y",
                else: "N",
              },
            },
          },
        },
      ])
      .sort({ date: -1 })
      .toArray();
  }

  res.statusCode = 200;
  res.statusMessage = "성공";

  return NextResponse.json({ res, result });
}
