const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ msg: "No token, access denied" });
    }

    const jwtToken = token.replace("Bearer ", "");

    const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

    req.user = decoded; // 👈 userId + email + isAdmin
    next();
  } catch (error) {
    return res.status(401).json({ msg: "Invalid Token" });
  }
};

module.exports = authMiddleware;
