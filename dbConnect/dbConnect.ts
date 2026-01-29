import mongoose from "mongoose";

export async function connect(): Promise<void> {
  try {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      throw new Error("MONGODB_URI is not defined in .env");
    }

    await mongoose.connect(uri);

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (err: unknown) => {
      console.error("MongoDB connection error:", err);
      process.exit(1);
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("DB connection failed:", error.message);
    } else {
      console.error("DB connection failed:", error);
    }
  }
}