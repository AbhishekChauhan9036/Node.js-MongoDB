const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const VarifyMid = require("../medelware/authMid")

router.post("/signIn", userController.createUser)
router.post("/login", userController.loginUser)
router.get("/users/:userId", VarifyMid.authetication, VarifyMid.Authorization, userController.getUserData)
router.put("/users/:userId", VarifyMid.authetication, VarifyMid.Authorization, userController.updateUser)
router.delete("/users/:userId", VarifyMid.authetication, VarifyMid.Authorization, userController.deleteUser)


module.exports = router;