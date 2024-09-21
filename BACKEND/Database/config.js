import mongoose from "mongoose";

export default async function dbConnection() {
  try {
    await mongoose.connect(process.env.MONGO_CNN);
    console.log("Successfully connected to the database");
  } catch (error) {
    console.log("Error connecting to the database", error);
  }
}
