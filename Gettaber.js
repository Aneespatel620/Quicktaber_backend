const TaberSchema = require("./Models/taberSchema");

const Gettaber = async (req, res) => {
  const userId = req.params.userId;

  if (!userId) {
    return res.json({ msg: "User ID Must Required !!!" });
  }
  try {
    const mytabe = await TaberSchema.find({ userId }).sort({ createAt: -1 });

    if (!mytabe) {
      return res.status(404).json({ msg: " Record is not Available !!" });
    }

    res.json({ msg: "All custome data Fetch !!!", mytabe });
  } catch (error) {
    console.log("gettaber page error ", error);
  }
};

module.exports = Gettaber;
