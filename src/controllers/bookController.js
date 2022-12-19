const { count } = require("console");
const bookModel = require("../models/bookModel");
const BookModel = require("../models/bookModel");

// 1..................................................................
const createBook = async function (req, res) {
  let data = req.body;

  let savedData = await BookModel.create(data);
  res.send({ msg: savedData });
};

const getBooksData = async function (req, res) {
  // 2...........................................................................
  // let ans = await bookModel.find();
  let ans = await bookModel
    .find()
    .select({ bookName: 1, authorname: 1, _id: 0 });

  // 3............................................................................
  /*let { year } = req.query;
  console.log(year);
  let ans = await bookModel.find({ year: { eq: year } }); */

  // 4............................................................................
  /* let bodyData = req.body;
  let ans = await bookModel.find(bodyData); */

  // 5............................................................................
  /* let ans = await bookModel.find({
    $or: [
      { "price.indianPrice": { $eq: "Rs 3000" } },
      { "price.indianPrice": { $eq: "Rs 2000" } },
      { "price.indianPrice": { $eq: "Rs 4000" } },
    ],
  });*/

  //6.............................................................................
  /*  let ans=await bookModel.find({$or:[{stockAvailable:{$eq:true}},{totalPages:{$gt:3000}}]}); */

  res.send({ result: ans });
};

module.exports.createBook = createBook;
module.exports.getBooksData = getBooksData;
