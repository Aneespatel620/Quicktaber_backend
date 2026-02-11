const TaberSchema = require("./Models/taberSchema");

const GettaberEdit = async (req, res) => {
  try {
    const { id } = req.params;

    const update = await TaberSchema.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!update) {
      return res.json({ msg: " editing for not data found" });
    }

    res.json({ msg: "Data Successfully Updated ", update });
  } catch (error) {
    console.log("getaber editing error", error);
  }
};

module.exports = GettaberEdit;
