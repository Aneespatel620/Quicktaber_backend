const express = require("express");

const router = express.Router();
// controllers
const signup = require("./Signup");
const Login = require("./Login");
const Taber = require("./Taber");
const Taberall = require("./taberall");
const Getuser = require("./Getalluser");
const Gettaber = require("./Gettaber");
const Gettaberall = require("./Gettaberall");
const GettaberDelete = require("./GettaberDEl");
const GettaberallDelete = require("./GettaberallDEL");
const GetalluserDelete = require("./GetalluserDEL");
const GettaberEdit = require("./GettaberEDIT");
const GettaberallEdit = require("./GettaberallEDIT");
//Analytics

const {
  trackAnalytics,
  mostUsed,
  topWebsites,
  deviceAnalytics,
  dailyVisitors,
} = require("./AnalyticsController");

//middle ware use for role-based admin panl
const authMiddleware = require("./Middleware/authMiddleware");
const adminMiddleware = require("./Middleware/adminMiddleware");

// Routes

router.route("/").get((req, res) => {
  res.send("Hello welcme router page ");
});

//public post
router.route("/login").post(Login);
router.route("/signup").post(signup);

//authmiddleware required
router.post("/taber", authMiddleware, Taber);
router.post("/taberall", authMiddleware, adminMiddleware, Taberall);

//get data

// router.route("/getuser").get(Getuser);
router.get("/getuser", authMiddleware, adminMiddleware, Getuser);
router.route("/gettaber/:userId").get(authMiddleware, Gettaber);
// router.route("/gettaberall").get(Gettaberall);
router.get("/gettaberall", authMiddleware, Gettaberall);

//delete
// router.route("/gettaberdel/:id").delete(GettaberDelete);
// router.route("/gettaberalldel/:id").delete(GettaberallDelete);
// router.route("/getalluserdel/:id").delete(GetalluserDelete);

router.delete(
  "/gettaberdel/:id",
  authMiddleware,

  GettaberDelete
);

router.delete(
  "/gettaberalldel/:id",
  authMiddleware,
  adminMiddleware,
  GettaberallDelete
);

router.delete(
  "/getalluserdel/:id",
  authMiddleware,
  adminMiddleware,
  GetalluserDelete
);

//editing routes
// router.route("/gettaberalledit/:id").put(GettaberallEdit);
// router.route("/gettaberedit/:id").put(GettaberEdit);
router.put("/gettaberedit/:id", authMiddleware, GettaberEdit);

router.put(
  "/gettaberalledit/:id",
  authMiddleware,
  adminMiddleware,
  GettaberallEdit
);

// ===== ANALYTICS ROUTES =====
router.post("/analytics", authMiddleware, trackAnalytics);

router.get(
  "/analytics/most-used-tabs",
  authMiddleware,
  adminMiddleware,
  mostUsed
);

router.get(
  "/analytics/top-websites",
  authMiddleware,
  adminMiddleware,
  topWebsites
);

router.get(
  "/analytics/device",
  authMiddleware,
  adminMiddleware,
  deviceAnalytics
);
router.get(
  "analytics/top-website",
  authMiddleware,
  adminMiddleware,
  topWebsites
);
router.get(
  "/analytics/daily-visitors",
  authMiddleware,
  adminMiddleware,
  dailyVisitors
);

module.exports = router;
