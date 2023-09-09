const jwt = require("jsonwebtoken");
const httpStatus = require("http-status-codes").StatusCodes;

module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) {
    console.log("Access denied. No token provided.");
    return res
      .status(httpStatus.UNAUTHORIZED)
      .json({ error: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY);

    if (!decoded.isActive && decoded.isActive === "false") {
      console.log("Access denied. User is inactive.");
      return res
        .status(httpStatus.UNAUTHORIZED)
        .json({ error: "Access denied. User is inactive." });
    }

    req.user = decoded;
    next();
  } catch (ex) {
    console.warn(`Invalid Token: ${ex}`);
    res.status(httpStatus.BAD_REQUEST).json({ error: "Invalid token." });
  }
};
