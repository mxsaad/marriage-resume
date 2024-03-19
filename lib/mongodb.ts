import { Db, MongoClient } from "mongodb";

let mongoClient: MongoClient;
let database: Db;

const uri = process.env.MONGODB_URI as string;
const dbName = process.env.MONGODB_DB_NAME as string;
if (!(uri || dbName))
  throw new Error("Please add your MongoDB URI and DB_NAME to .env.local");

export default async function connectToDatabase() {
  if (mongoClient && database) return { mongoClient, database };

  if (process.env.NODE_ENV === "development") {
    if (!(global as any)._mongoClient) {
      mongoClient = await new MongoClient(uri).connect();
      (global as any)._mongoClient = mongoClient;
    } else {
      mongoClient = (global as any)._mongoClient;
    }
  } else {
    mongoClient = await new MongoClient(uri).connect();
  }

  database = mongoClient.db(dbName);
  return { mongoClient, database };
}
