const authormodel = require("../models/author");

const author = async function (req, res) {
  let data = req.body;
  let savedData = await authormodel.create(data);
  res.send({ msg: savedData });
};

module.exports.author = author;
