const bookdetail = require("../models/bookname.js");
const authormodel = require("../models/author");

// Solution 1......................................................................................
const book = async function (req, res) {
  let data = req.body;
  let savedData = await bookdetail.create(data);
  res.send({ msg: savedData });
};

// Solution 2..........................................................................................
const getlistbooks = async function (req, res) {
  let authors = await authormodel
    .find({ author_name: "Chetan Bhagat" })
    .select({ author_id: 1 });
  let booklist = await bookdetail.find({ author_id: authors[0].author_id });
  res.send({ msg: booklist });
};

// Solution 3..............................................................................................
const getfindauthor = async function (req, res) {
  const bookdetails = await bookdetail.findOneAndUpdate(
    { name: "Two states" },
    { $set: { price: 100 } },
    { new: true }
  );
  const author = await authormodel.findOne({
    author_id: bookdetails.author_id,
  });
  res.send({ authorname: author.author_name, price: bookdetails.price });
};

// Solution 4..................................................................................................
const getfindbook = async function (req, res) {
  const book = await bookdetail
    .find({ price: { $gte: 50, $lte: 100 } })
    .select({ author_id: 1 });
  const arr = book.map((x) => x.author_id);
  const authorname = await authormodel.find({ author_id: { $in: arr } });
  res.send({ msg: authorname });
};

module.exports.getfindbook = getfindbook;
module.exports.book = book;
module.exports.getlistbooks = getlistbooks;
module.exports.getfindauthor = getfindauthor;
