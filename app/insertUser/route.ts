import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { connectDB } from "@utils/database";

if (!process.env.MONGODB_URL) throw new Error("env error");

export async function POST(req: Request, res: NextApiResponse) {
  const data = await req.json();
  const { number } = data;

  //MongoDB 연결
  const client = await connectDB;
  const db = client.db("test");

  // 기존 가입된 번호 체크하기
  const checkExisting = await db.collection("users").findOne({ number });
  if (!checkExisting) {
    await db.collection("users").insertOne({
      number,
    });
  }

  // 번호로 댓글 조회하기
  let result = await db.collection("comments").find({ user: number }).toArray();

  res.statusCode = 200;
  res.statusMessage = "성공";

  await client.close();

  return NextResponse.json({ res, result });
}
