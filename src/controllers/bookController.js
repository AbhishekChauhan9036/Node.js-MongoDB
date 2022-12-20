const { count } = require("console");
const bookModel = require("../models/bookModel");
const BookModel = require("../models/bookModel");

// createBook : to create a new entry..use this api to create 11+ entries in your collection
// bookList : gives all the books- their bookName and authorName only
// getBooksInYear: takes year as input in post request and gives list of all books published that year
// getParticularBooks:- (this is a good one, make sincere effort to solve this) take any input and use it as a condition to fetch books that satisfy that condition 	
// e.g if body had { name: “hi”} then you would fetch the books with this name
// if body had { year: 2020} then you would fetch the books with this name
// hence the condition will differ based on what you input in the request body
// getXINRBooks- request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR”
// getRandomBooks - returns books that are available in stock or have more than 500 pages 
// 1..................................................................
const createBook = async function (req, res) {
  let data = req.body;

  let savedData = await BookModel.create(data);
  res.send({ msg: savedData });
};

const getBooksData = async function (req, res) {
  // 2...........................................................................
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
   /*let ans = await bookModel.find({
    $or: [
      { "price.indianPrice": { $eq: "“100INR”" } },
      { "price.indianPrice": { $eq: "200INR" } },
      { "price.indianPrice": { $eq: "500INR" } },
    ],
  });*/

  //6.............................................................................
   /* let ans=await bookModel.find({$or:[{stockAvailable:{$eq:true}},{totalPages:{$gt:500}}]}); */

  res.send({ result: ans });
};

module.exports.createBook = createBook;
module.exports.getBooksData = getBooksData;
