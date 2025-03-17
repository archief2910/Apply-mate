import mongoose from "mongoose";
import colors from "colors";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.mongo_url);
    console.log(
      `Connected to MongoDb Database ${mongoose.connection.host}`.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`MongoDB Error: ${error}`.bgRed.white);
  }
};

export default connectDb;
