const express = require("express");
const router = express.Router();


router.post("/test-post-3", function (req, res) {
  let id = req.body.user;
  let pwd = req.body.password;

  console.log(id, pwd);

  console.log(req.body);

  res.send({ msg: "hi", status: true });
});

router.post("/test-post-4", function (req, res) {
  let arr = [12, "functionup"];
  let ele = req.body.element;
  arr.push(ele);
  res.send({ msg: arr, status: true });
});

module.exports = router;
