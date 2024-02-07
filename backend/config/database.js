import mongoose from "mongoose";
import { config } from "dotenv";
config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("db is connected successfully"))
    .catch((err) => {
      console.log("error in db connection");
      console.error(err.message);
      process.exit(1);
    });
};

export default dbConnect;
