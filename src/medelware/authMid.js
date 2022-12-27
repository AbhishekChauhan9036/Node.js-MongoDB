const jwt = require("jsonwebtoken");
const authetication = function (req, res, Next) {
    let token = req.headers["x-auth-token"];

    if (!token) return res.send({ status: false, msg: "token must be present" });

    let decodedToken = jwt.verify(token, "functionup-californium");

    if (!decodedToken)
        return res.send({ status: false, msg: "token is invalid" });
    Next()
}
module.exports.authetication = authetication