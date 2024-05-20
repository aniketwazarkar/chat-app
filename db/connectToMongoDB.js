import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    // eslint-disable-next-line no-undef
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("Connected to MongoDB 🛢");
  } catch (error) {
    console.error("Error connecting to MongoDB locally:", error);
  }
};

export default connectToMongoDB;
