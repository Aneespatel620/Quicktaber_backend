const adminMiddleware = (req, res, next) => {
  if (!req.user.isAdmin) {
    return res.status(403).json({ msg: "Admin access only ❌" });
  }
  next();
};

module.exports = adminMiddleware;
