const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const VarifyMid = require("../medelware/authMid")

router.post("/signIn", userController.createUser  )

router.post("/login", userController.loginUser)

router.get("/users/:userId", VarifyMid.authetication, userController.getUserData)

router.put("/users/:userId", VarifyMid.authetication, userController.updateUser)

router.delete("/users/:userId", VarifyMid.authetication, userController.deleteUser)

module.exports = router;