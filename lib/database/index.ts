import mongoose, { Mongoose } from 'mongoose';

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export const connectToDatabase = async () => {
  if (cached.conn) {
    return cached.conn;
  }
  
  if (!process.env.MONGODB_URL) {
    throw new Error('MONGODB_URL is missing');
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(process.env.MONGODB_URI as string, {
      dbName: 'marriage-resume',
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
