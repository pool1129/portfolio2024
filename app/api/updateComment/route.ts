import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { connectDB } from "@utils/database";
import { ObjectId } from "mongodb";

if (!process.env.MONGODB_URL) throw new Error("env error");

export async function PATCH(req: Request, res: NextApiResponse) {
  const data = await req.json();
  const { id, comment } = data;

  //MongoDB 연결
  const client = await connectDB;
  const db = client.db("test");

  // 기존 댓글 수정
  await db
    .collection("comments")
    .updateOne(
      { _id: new ObjectId(id) },
      { $set: { comment: comment, date: new Date() } }
    );

  res.statusCode = 200;
  res.statusMessage = "성공";

  return NextResponse.json({ res });
}
