const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const TaberSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Taberuser",
    required: true,
  },
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

// jwt token generatetoken

TaberSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        tabid: this._id.toString(),
        title: this.name,
        url: this.Url,
        desc: this.Description,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.log("token generate error", error);
  }
};

module.exports = mongoose.model("TabCustome", TaberSchema);
