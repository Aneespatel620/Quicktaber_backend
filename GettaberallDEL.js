const TaberSchemaall = require("./Models/taberallSchema");

const GettaberallDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TaberSchemaall.findByIdAndDelete(id);
    console.log("Delet sucess", result);

    // Agar ID invalid hai ya data nahi mila
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Data not found, invalid ID",
      });
    }

    // Successful delete response
    res.status(200).json({
      success: true,
      message: "Data deleted successfully !!",
      deletedData: result,
    });
    // res.status(200).json({ msg: " Delete Successfully !!!" });
  } catch (error) {
    console.log("public taber error", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = GettaberallDelete;
