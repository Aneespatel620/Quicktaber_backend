const { Result } = require("express-validator");
const UserSchema = require("./Models/userSchema");
const { json } = require("body-parser");

const GetalluserDelete = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await UserSchema.findByIdAndDelete(id);

    console.log("delete success fullly", result);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Data not found not valid ",
      });
    }
    res.json({
      success: true,
      msg: "Data Successfully delete !!!",
      deletedata: result,
    });
  } catch (error) {
    console.log("data delete error");
    return res
      .status(500)
      .json({ success: false, message: "Server backend error", error });
  }
};

module.exports = GetalluserDelete;
