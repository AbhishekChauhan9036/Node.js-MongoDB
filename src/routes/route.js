const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const bookPublisherController=require('../controllers/bookPublishController')
const { find } = require('../models/authorModel');


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post('/createNewAuthor',bookPublisherController.createNewAuthor)//for new author
router.post('/createNewPublisher',bookPublisherController.createNewPublisher)//for new publisher 
router.post('/createNewBook',bookPublisherController.createNewBook)//for new book

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createAuthor", authorController.createAuthor  )

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

router.get('/getAllbooks',bookPublisherController.getAllbooks)//get all book

router.put('/books',bookPublisherController.books)

module.exports = router;