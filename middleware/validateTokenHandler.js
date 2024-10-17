const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  let storedToken = req.cookies?.jwt; // Handle token from cookies

  // Check if the token is in the authorization header or cookies
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
  } else if (storedToken) {
    token = storedToken;
  }

  // If no token is found, respond with an error
  if (!token) {
    return res.status(401).json({ message: 'User is not authorized or token is missing' });
  }

  // Verify the token
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'User is not authorized' });
    }
    req.user = decoded.user;
    next();
  });
});

module.exports = validateToken;
