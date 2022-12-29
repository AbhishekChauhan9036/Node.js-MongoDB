const jwt = require("jsonwebtoken");
const auth = function logMethod(req, res, next) {
  try {
    let token = req.headers["x-auth-token"];
    if (!token)
      return res.status(400).send({
        status: false,
        msg: "token Not avabile",
      });
    let decodedToken = jwt.verify(token, "sandeepmaurya");
    if (!decodedToken)
      return res.status(401).send({ status: false, msg: "token is invalid" });
    let userToBeModified = req.params.userId;
    let userLoggedIn = decodedToken.userId;

    if (userToBeModified != userLoggedIn)
      return res
        .status(403)
        .send({ status: false, msg: "User and user's-token in not matched" });

    next();
  } catch (error) {
    res.send({ msg: "Error", error: error.message });
    console.log("This is the error", error.message);
  }
};

module.exports.auth = auth;
