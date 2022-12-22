const bookModel = require("../models/book56list");

const createuserbook = async function (req, res) {
  let data = req.body;

  let savedData = await bookModel.create(data);
  res.send({ msg: savedData });
};

const getBooksData = async function (req, res) {
  let AllBooks = await bookModel.find().select({ bookName: 1, authorName: 1 });
  res.send({ msg: AllBooks });
};

const getbooksInYear = async function (req, res) {
  let Books = await bookModel.find({ year: 2010 });
  res.send({ msg: Books });
};

const getXINRBooks = async function (req, res) {
  let Books = await bookModel.find({
    "prices.indianPrice": { $in: [100, 200, 300] },
  });
  res.send({ msg: Books });
};

const getRandomBooks = async function (req, res) {
  let Books = await bookModel.find({
    $or: [{ stockAvailable: true }, { totalPages: { $gte: 500 } }],
  });
  res.send({ msg: Books });
};

const getParticularBooks = async function (req, res) {
  let Books = await bookModel
    .find({
      $or: [{ year: 2020 }],
    })
    .select({ bookName: 1, _id: 0 });
  res.send({ msg: Books });
};

module.exports.createuserbook = createuserbook;
module.exports.getBooksData = getBooksData;
module.exports.getbooksInYear = getbooksInYear;
module.exports.getXINRBooks = getXINRBooks;
module.exports.getRandomBooks = getRandomBooks;
module.exports.getParticularBooks = getParticularBooks;
