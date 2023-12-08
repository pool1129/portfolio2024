import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { connectDB } from "@utils/database";
import { cookies } from "next/headers";

if (!process.env.MONGODB_URL) throw new Error("env error");

export async function GET(req: Request, res: NextApiResponse) {
  const client = await connectDB;
  const db = client.db("test");

  const cookieStore = cookies();
  const user = cookieStore.get("login-number");
  let result = await db
    .collection("comments")
    .find({ user: user?.value })
    .sort({ date: -1 })
    .toArray();

  res.statusCode = 200;
  res.statusMessage = "성공";

  return NextResponse.json({ res, result });
}
