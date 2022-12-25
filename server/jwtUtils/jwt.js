const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateAccessToken = (username) => {
  return jwt.sign(username, process.env.TOKEN_SECRET);
};

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);
  jwt.verify(token, process.env.TOKEN_SECRET, (err, email) => {
    if (err) return res.sendStatus(403);
    req.email = email;
    next();
  });
};

module.exports = { generateAccessToken, authenticateToken };
