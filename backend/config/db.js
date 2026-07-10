import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected ✅");
  } catch (error) {
    console.log("DB ERROR ❌", error.message);
  }
  console.log("MONGO_URI:", process.env.MONGO_URI);
};

export default connectDB;