const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  role: {
    type: String,
  },
  phone: {
    type: String,
  },
  add: {
    type: String,
  },
});

module.exports = mongoose.model("Data", DataSchema);
