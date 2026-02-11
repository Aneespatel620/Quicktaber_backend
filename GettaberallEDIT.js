const TaberallSchema = require("./Models/taberallSchema");

const GettaberallEdit = async (req, res) => {
  try {
    const { id } = req.params;

    const update = await TaberallSchema.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!update) {
      return res.json({
        success: false,
        msg: "taberall public for editing data not found ",
      });
    }

    res.json({
      success: true,
      msg: "data Successfullly updated !!! , public tabs",
      update,
    });
  } catch (error) {
    console.log("taber data editing error", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = GettaberallEdit;
