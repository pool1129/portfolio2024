import { MongoClient } from "mongodb";
const url = process.env.MONGODB_URL;

declare global {
  var _mongo: Promise<MongoClient> | undefined;
}

if (!url) {
  throw new Error("The MONGODB_URL environment variable is not defined");
}

let connectDB: Promise<MongoClient>;
connectDB = new MongoClient(url).connect();

export { connectDB };
