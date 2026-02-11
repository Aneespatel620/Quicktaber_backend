const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const TaberallSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  Url: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
});

// jwt token

TaberallSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        name: this.name,
        Url: this.Url,
        Description: this.Description,
      },
      process.en.JWT_SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.log("token generate error", error);
  }
};

module.exports = mongoose.model("taball", TaberallSchema);
