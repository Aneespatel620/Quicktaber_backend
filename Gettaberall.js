const Taberall = require("./Models/taberallSchema");

const Gettaberall = async (req, res) => {
  try {
    const mytaberall = await Taberall.find({}).sort({ createAt: -1 });

    if (!mytaberall) {
      return res.status(404).json({ msg: " Record is not Available !!" });
    }

    res.json({ msg: "All data fetch successfully !!", mytaberall });
  } catch (error) {
    console.log("gettaberall page error", error);
  }
};

module.exports = Gettaberall;
