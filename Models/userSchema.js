const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },

  {
    timestamps: true, // ⭐ VERY IMPORTANT,
  }
);

//bcrypt.js hash

UserSchema.pre("save", async function (next) {
  console.log("before Hashing password ", this.password);
  if (this.isModified("password")) {
    try {
      const salt = await bcrypt.genSalt(10);

      this.password = await bcrypt.hash(this.password, salt);
    } catch (error) {
      console.log("hashing error", error);
      return next(error);
    }
  }

  next();
});

// jwt token  genrateToken()
UserSchema.methods.genrateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.log("genrate the token error", error);
  }
};

module.exports = mongoose.model("Taberuser", UserSchema);
