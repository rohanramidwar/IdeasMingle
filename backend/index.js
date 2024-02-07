import express from "express";
import { config } from "dotenv";
import dbConnect from "./config/database.js";
import microblogRoutes from "./routes/microblogs.js";

const app = express();

config();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/v1", microblogRoutes);

app.listen(PORT, () => {
  console.log(`server is running successfully at PORT: ${PORT}`);
});

dbConnect();
