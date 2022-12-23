const newAuthorModel = require("../models/authorModel");
const newPublisherModel = require("../models/publisherModel");
const newBookModel = require("../models/bookModel");

  //  Solution 1...........................................................................................
const createNewAuthor = async function (req, res) {
  let data = req.body;
  let newAuthor = await newAuthorModel.create(data);
  res.send({ msg: newAuthor });
};

  //  Solution 2...........................................................................................
const createNewPublisher = async function (req, res) {
  let data = req.body;
  let newPublisher = await newPublisherModel.create(data);
  res.send({ msg: newPublisher });
};


  //  Solution 3...........................................................................................
const createNewBook = async function (req, res) {
  let data = req.body;
  //  Solution 3(a)...........................................................................................
  let x = Object.keys(req.body);
  if (!x.includes("author")) {
    res.send({ error: "this detail is required" });
  } else {
    //  Solution 3(b)...........................................................................................
    let y = await newAuthorModel.find({ _id: req.body["author"] });
    if (y.length > 0) {
      //  Solution 3(c)...........................................................................................
      if (x.includes("publisher")) {
        let z = await newPublisherModel.find({ _id: req.body["publisher"] });
        if (z.length > 0) {
          let finalBook = await newBookModel.create(data);
          res.send({ msg: finalBook });
        } else {
          res.send({ error: "publisher is required" });
        }
      } else {
        res.send({ error: "please enter pubisher Field"});
      }
    } else {
      res.send({ error: "author is not present" });
    }
  }
};

// Solution 4................................................................ 
const getAllbooks = async function (req, res) {
  let authBooks = await newBookModel.find().populate("author").populate("publisher");
  res.send({ msg: authBooks });
};


// Solution 5................................................................
const books = async function (req, res) {
  let authbook = await newBookModel.find().populate("author").populate("publisher");
  let y = [];
  let e = [];
  authbook.forEach((x) => {
    if ( x["publisher"]["name"] == "Penguin" || x["publisher"]["name"] == "HarperCollins") {
      y.push(x["name"]);
    }
  });
  authbook.forEach((x) => {
    if (x["author"]["rating"] > 3.5) {
      console.log(x["author"]["rating"]);
      e.push(x["name"]);
    }
  });
  console.log(e);
  let m = await newBookModel.updateMany(
    { name: { $in: y } },
    { $set: { isHardCover: true } },
    { new: true }
  );
  let k = await newBookModel.updateMany(
    { name: { $in: e } },
    { $inc: { price: 10 } },
    { new: true }
  );
  let z = await newBookModel.find();
  res.send({ res: z });
};


module.exports.books = books;
module.exports.getAllbooks = getAllbooks;
module.exports.createNewBook = createNewBook;
module.exports.createNewPublisher = createNewPublisher;
module.exports.createNewAuthor = createNewAuthor;
