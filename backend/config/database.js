const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB is connected Successfully !"))
    .catch((err) => {
      console.log("Issue in DB CONNECTION");
      console.error(err.message);
      process.exit(1);
    });
};

module.exports = dbConnect;
