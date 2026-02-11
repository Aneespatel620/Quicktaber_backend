const TaberSchema = require("./Models/taberSchema");

const GettaberDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TaberSchema.findByIdAndDelete(id);
    console.log("Delete result:", result);

    res.json({ msg: " Delete data Successfuly !!" });
  } catch (error) {
    console.log("delete error", error);
  }
};

module.exports = GettaberDelete;
