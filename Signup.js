const express = require("express");

const UserSchema = require("./Models/userSchema");

const Signup = async (req, res) => {
  const { name, email, password, isAdmin } = req.body;

  const userExists = await UserSchema.findOne({ email });
  if (userExists) {
    return res.json({
      msg: "email Already Exists !! OOPS !!",
    });
  }
  if (!name || !email || !password) {
    return res.json({ msg: "Please Fill alll Field " });
  }
  try {
    const mydata = await UserSchema.create({
      name,
      email,
      password,
      isAdmin,
    });
    res.json({
      msg: "Signup Successfully !!!",
      token: await mydata.genrateToken(),
      name: mydata.name,
      userId: mydata._id.toString(),
      email: mydata.email,
      mydata: mydata,
      id: mydata._id,
    });
  } catch (error) {
    console.log("signup posting error", error);
  }
};

module.exports = Signup;
