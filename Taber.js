const express = require("express");

const TaberSchema = require("./Models/taberSchema");
const taberSchema = require("./Models/taberSchema");

const Taber = async (req, res) => {
  const { userId, name, Url, Description, createAt } = req.body;

  if (!name || !Url || !Description) {
    return res.json({ msg: "Please fill all Fields !!!" });
  }

  const nameExists = await TaberSchema.findOne({ name });
  if (nameExists) {
    return res.json({ msg: "name Already Exisits please another try !!!" });
  }
  try {
    const tabcreate = await TaberSchema.create({
      userId,
      name,
      Url,
      Description,
      createAt,
    });
    res.json({
      msg: "Taber custome Successfully Created !!!",
      Token: await tabcreate.generateToken(),
      data: tabcreate,
      userID: tabcreate._id.toString(),
      name: tabcreate.name,
      Description: tabcreate.Description,
    });
  } catch (error) {
    console.log("taber custome add error", error);
  }
};

module.exports = Taber;
