const mongoose = require("mongoose");

const analyticsSchema = new mongoose.Schema({
  tabName: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  deviceType: {
    type: String,
    enum: ["mobile", "desktop"],
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false, // guest users ke liye optional
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Analytics", analyticsSchema);
