const jwt = require("jsonwebtoken");
const secrets = require("./secrets");

// authentication middleware prevents acces without JWT
module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  const s = token.slice(7)
  console.log(s)
  if (token) {
    const secret = secrets.jwtSecret;
    jwt.verify(s, secret, function (err, decodedToken) {
      if (err) {
        res.status(401).json({ message: "invalid token" });
      } else {
        req.token = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ message: "please login" });
  }
};