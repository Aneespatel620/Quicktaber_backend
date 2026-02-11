require("dotenv").config();

const ConnectDB = require("./db");

const DataSchema = require("./Models/dataSchema");

const datajson = require("./data.json");

const data = async () => {
  try {
    await ConnectDB(process.env.MONGO_URI);

    await DataSchema.deleteMany();
    await DataSchema.create(datajson);

    console.log("Data Successfully imported !!!");
    process.exit(0);
  } catch (error) {
    console.log("data json export error", error);
    process.exit(1);
  }
};

data();
