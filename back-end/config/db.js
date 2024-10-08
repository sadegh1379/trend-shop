import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGOOSE_DB_URL)
    .then(() => console.log("db connected"));
};
