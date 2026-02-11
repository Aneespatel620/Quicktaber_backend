const UserSchema = require("./Models/userSchema");

const Getuser = async (req, res) => {
  try {
    const mydata = await UserSchema.find({})
      .sort({ createdAt: -1 })
      .select("-password");

    if (!mydata) {
      return res.status(404).json({ msg: " Record is not Available !!" });
    }

    res.json({
      msg: "All Users data ",
      mydata,
    });
  } catch (error) {
    console.log("get user data error", error);
  }
};

module.exports = Getuser;
