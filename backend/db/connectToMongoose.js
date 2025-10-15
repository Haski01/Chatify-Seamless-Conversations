import mongoose from "mongoose";

const connectToMongoose = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connect to MongoDB");
  } catch (error) {
    console.log("Error connection to mongoDB", error.message);
  }
};

export default connectToMongoose;
