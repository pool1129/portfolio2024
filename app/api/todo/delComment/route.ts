import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { connectDB } from "@utils/database";
import { ObjectId } from "mongodb";
import { cookies } from "next/headers";

if (!process.env.MONGODB_URL) throw new Error("env error");

export async function DELETE(req: Request, res: NextApiResponse) {
  const data = await req.json();
  const { id } = data;

  //MongoDB 연결
  const client = await connectDB;
  const db = client.db("test");

  // 기존 댓글 삭제
  await db.collection("comments").deleteOne({ _id: new ObjectId(id) });

  res.statusCode = 200;
  res.statusMessage = "성공";
  return NextResponse.json({ res });
}
