const jwt = require("jsonwebtoken");

const authetication = function (req, res, Next) {
    let token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });
    let decodedToken = jwt.verify(token, "Abhishek_Chauhan-form");

    if (!decodedToken)
        return res.send({ status: false, msg: "token is invalid" });
    Next()
}

const Authorization = function (req, res, Next) {
    let userToBeModified = req.params.userId
    let token = req.headers["x-auth-token"];
    let decodedToken = jwt.verify(token, "Abhishek_Chauhan-form");
    let userLoggedIn = decodedToken.userId
    if (userToBeModified != userLoggedIn) return res.send({ status: false, msg: 'User logged is not allowed to modify the requested users data' });
    Next()
}


module.exports.authetication = authetication
module.exports.Authorization = Authorization