const mongoose = require("mongoose");
require("dotenv").config();
const ConnectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(
      `Mongodb is connected Successfully !!! ${conn.connection.host}`
    );
  } catch (error) {
    console.log("Cennection error", error);
    process.exit(1);
  }
};

module.exports = ConnectDB;
