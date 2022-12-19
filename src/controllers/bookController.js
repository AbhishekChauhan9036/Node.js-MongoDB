const { count } = require("console");
const BookModel = require("../models/bookModel");

const createBook = async function (req, res) {
  let data = req.body;

  let savedData = await BookModel.create(data);
  res.send({ msg: savedData });
};

const bookList = async function (req, res) {
  let bookn = req.body.bookName;
  let author = req.body.authorName;
  res.send({ msg: bookn, author });
};

const getBooksInYear = async function (req, res) {
  let getyear = req.body.year;
  res.send({ msg: getyear });
};

const getParticularBooks = async function (req, res) {};

const getUsersData = async function (req, res) {};

const getRandomBooks = async function (req, res) {};


const getBooksData = async function (req, res) {
  // createBook : to create a new entry..use this api to create 11+ entries in your collection
  // bookList : gives all the books- their bookName and authorName only
  // getBooksInYear: takes year as input in post request and gives list of all books published that year
  // getParticularBooks:- (this is a good one, make sincere effort to solve this) take any input and use it as a condition to fetch books that satisfy that condition
  // e.g if body had { name: “hi”} then you would fetch the books with this name
  // if body had { year: 2020} then you would fetch the books with this name
  // hence the condition will differ based on what you input in the request body
  // getXINRBooks- request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR”
  // getRandomBooks - returns books that are available in stock or have more than 500 pages
};

module.exports.createBook = createBook;
module.exports.getBooksData = getBooksData;
