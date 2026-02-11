const express = require("express");
const TaberallSchema = require("./Models/taberallSchema");

const Taberall = async (req, res) => {
  const { name, Url, Description, createAt } = req.body;
  if (!name || !Url || !Description) {
    return res.json({ msg: "please fill all fields !!!" });
  }
  try {
    const tabeallcreate = await TaberallSchema.create({
      name,
      Url,
      Description,
      createAt,
    });

    res.json({
      msg: "Taber all  Successfully created !!!",
      data: tabeallcreate,
      userId: tabeallcreate._id.toString(),

      name: tabeallcreate.name,
    });
  } catch (error) {
    console.log("taberall page post error", error);
  }
};

module.exports = Taberall;
