require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
// yè cors zarorri hai werna fronted per ye login kuch bhi work nahi kerte .
// app.use(
//   cors({
//     // origin: "http://localhost:5173",
//     origin:
//       "https://quicktaberfronted2-7y75qrsxc-patel-anees-projects.vercel.app/",
//     credentials: true,
//   })
// ); be fore deploèe
// ye neeche ke bhi sab allow kerta per abhi nahi horà
// app.use(
//   cors({
//     origin: true,
//     credentials: true,
//   })
// );
app.use(
  cors({
    origin: [
      "https://quicktaberfronted33.vercel.app",
      "https://quicktaberfronted33-git-main-patel-anees-projects.vercel.app",
    ],
    credentials: true,
  })
);

app.options("*", cors());

app.use(express.json());

app.use(express.json());
const Router = require("./Router");
const ConnectDB = require("./db");
const port = process.env.PORT || 5000;
app.use("/api", Router);

app.get("/", (req, res) => {
  res.json({ msg: "hello backend  first page" });
});

const Start = async () => {
  try {
    await ConnectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is ready : http://localhost:${port}`);
    });
  } catch (error) {
    console.log("App.js page connection problem error", error);
  }
};

Start();
