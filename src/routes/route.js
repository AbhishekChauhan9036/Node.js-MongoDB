const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")

const BookControler=require("../controllers/bookController")
const customerApiController=require("../controllers/customerApiController")


router.post('/Customer',customerApiController.preCustom)
router.post('/Cat',customerApiController.preCad)
router.get('/CustomerAPI',customerApiController.getCustomAPI)
router.post('/CustomerAPI',customerApiController.postCustomAPI)
router.get('/CustomerAPID',customerApiController.flagCustomAPI)
router.get('/CardsAPI',customerApiController.getCardAPI)
router.post('/CardsAPI',customerApiController.preCad)

module.exports = router;