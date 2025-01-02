const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected SuccessFully");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
