const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookModel=require("../models/bookModel")
const BookControler=require("../controllers/bookController")
const customCatController=require("../controllers/customCatController")


router.post('/Customer',customCatController.preCustom)
router.post('/Cat',customCatController.preCad)
router.get('/CustomerAPI',customCatController.getCustomAPI)
router.post('/CustomerAPI',customCatController.postCustomAPI)
router.get('/CustomerAPID',customCatController.flagCustomAPI)
router.get('/CardsAPI',customCatController.getCardAPI)
router.post('/CardsAPI',customCatController.preCad)

module.exports = router;