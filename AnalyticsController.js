const AnalyticsSchema = require("./Models/AnalyticsSchema");

const trackAnalytics = async (req, res) => {
  try {
    const { tabName, url, deviceType } = req.body;

    const analytics = new AnalyticsSchema({
      tabName,
      url,
      deviceType,
      userId: req.user?.id, // authMiddleware se aata hai
    });

    await analytics.save();
    res.status(201).json({ message: "Analytics tracked" });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("tracking data error", error);
  }
};

// 👉 Most used tabs

const mostUsed = async (req, res) => {
  try {
    const data = await AnalyticsSchema.aggregate([
      { $group: { _id: "$tabName", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 },
    ]);

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("most used tab error", error);
  }
};

// Top websites

const topWebsites = async (req, res) => {
  const data = await AnalyticsSchema.aggregate([
    { $group: { _id: "$url", clicks: { $sum: 1 } } },
    { $sort: { clicks: -1 } },
    { $limit: 5 },
  ]);

  res.json(data);
};

//Devices analytics

const deviceAnalytics = async (req, res) => {
  const data = await AnalyticsSchema.aggregate([
    { $group: { _id: "$deviceType", count: { $sum: 1 } } },
  ]);

  res.json(data);
};

// ================= 👀 DAILY VISITORS (NEW) =================
const dailyVisitors = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const count = await AnalyticsSchema.countDocuments({
      createdAt: { $gte: today },
    });

    res.json({ todayVisitors: count });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  trackAnalytics,
  mostUsed,
  topWebsites,
  deviceAnalytics,
  dailyVisitors,
};
