const auth = require("../config/auth");

const authMiddleware = (req, res, next) => {
  //const token = req.headers["authorization"]?.split(" ")[1];
  const token = req.cookies.accessToken;
  console.log(token);
  
  if (!token) {
    return res.status(401).json("Access denied");
  }
  const user = auth.verifyToken(token);
  if (!user) {
    return res.status(403).json("Invalid token");
  }
  req.user = user;
  req.locals = user;
  next();
};

module.exports = { authMiddleware };
