const UserSchema = require("./Models/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExists = await UserSchema.findOne({ email });

    if (!userExists) {
      return res.json({ msg: "User not found !!!" });
    }

    const user = await bcrypt.compare(password, userExists.password);
    if (user) {
      return res.json({
        msg: "Login Successfully!!1",
        token: await userExists.genrateToken(),
        email: userExists.email,
        userId: userExists._id.toString(),
        name: userExists.name,
        isAdmin: userExists.isAdmin,
      });
    } else {
      res.json({ msg: "Invalid User !!" });
    }
  } catch (error) {
    console.log("login page error", error);
  }
};

module.exports = Login;
