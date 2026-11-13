import mongoose from "mongoose";

// Connect to MongoDB database
const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Database connected.");
  });
  await mongoose.connect(`${process.env.MONGODB_URI}/edemy`);
};

export default connectDB;
