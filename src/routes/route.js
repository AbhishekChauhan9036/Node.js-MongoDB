const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const bookPublisherController=require('../controllers/bookPublishController')
const { find } = require('../models/authorModel');


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

router.post('/createNewAuthor',bookPublisherController.createNewAuthor)

router.post('/createNewPublisher',bookPublisherController.createNewPublisher)


router.post('/createNewBook',bookPublisherController.createNewBook)

router.get('/getAllbooks',bookPublisherController.getAllbooks)

router.put('/books',bookPublisherController.books)

module.exports = router;