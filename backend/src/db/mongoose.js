import mongoose from "mongoose";

export const connectMongo = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    throw new Error("MONGO_URI environment variable is required");
  }
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  return mongoose;
};

export default mongoose;
