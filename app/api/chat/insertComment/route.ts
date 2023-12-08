import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { connectDB } from "@utils/database";

if (!process.env.MONGODB_URL) throw new Error("env error");

export async function POST(req: Request, res: NextApiResponse) {
  const data = await req.json();
  const { user, comment } = data;

  const client = await connectDB;
  const db = client.db("test");

  await db.collection("comments").insertOne({
    user,
    comment,
    date: new Date(),
    editYn: "Y",
  });

  res.statusCode = 200;
  res.statusMessage = "성공";

  return NextResponse.json({ res });
}
