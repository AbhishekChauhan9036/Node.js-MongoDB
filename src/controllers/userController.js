const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const { post } = require("../routes/route");

// Q 1- ................................................................................
const createUser = async function(req, res) {
        try {
            let Data = req.body
            if (Data) {
                let createuser = await userModel.create(Data)
                return res.status(201).send({ status: true, msg: createuser })
            } else
                res.status(400).send({ msg: "Bad Request" })
        } catch (error) {
            res.status(500).send({ msg: "Error", error: error.message })
            console.log("This is the error", error.message);
        }
    }



// Q2 ........................................................................................
const loginUser = async function(req, res) {
    try {
        let userName = req.body.emailId;
        let password = req.body.password;
        let user = await userModel.findOne({ emailId: userName, password: password })
        if (!user)
            return res.status(404).send({
                status: false,
                msg: "user not exixts"
            })

        let token = jwt.sign({ userId: user._id.toString() }, "chauhanabhishek")
        res.header('x-auth-token', token)
        res.status(201).send({ status: true })
    } catch (error) {
        res.status(500).send({ msg: "Error", error: error.message })
        console.log("This is the error", error.message);
    }
}


// Q3 ........................................................................................
const getUserData = async function(req, res) {
    try {
        let userId = req.params.userId
        let userDetails = await userModel.findById(userId)
        if (!userDetails)
            return res.status(404).send({
                status: false,
                msg: "User not exists"
            });
        res.status(200).send({ status: true, data: userDetails })
    } catch (error) {
        res.status(500).send({ msg: "Error", error: error.message })
        console.log("This is the error", error.message);
    }
}




// Q4 ........................................................................................
const updateUser = async function(req, res) {
    try {
        let message = req.body.message
        let userId = req.params.userId;
        let userDetails1 = await userModel.findById(userId)
        if (!userDetails1) {
            return res.status(404).send({
                satus: false,
                msg: "user not exits"
            });
        }

        let updatedPosts = userDetails1.posts
        updatedPosts.push(message);
        let updatedUser = await userModel.findOneAndUpdate({ _id: userDetails1._id }, { posts: updatedPosts }, { new: true })
        return res.status(200).send({ status: true, data: updatedUser })
    } catch (error) {
        res.status(500).send({ msg: "Error", error: error.message })
        console.log("This is the error", error.message);
    }
}


// Q5 ........................................................................................
const deleteUser = async function(req, res) {
    try {
        let userId = req.params.userId;
        if (!userId) {
            return res.status(404).send({
                satus: false,
                msg: "Provide userId"
            });
        }
        let deleteUser = await userModel.findOneAndUpdate({ _id: userId }, { $set: { isDeleted: true } }, { new: true });
        res.status(200).send({ status: true, msg: deleteUser })

    } catch (error) {
        res.status(500).send({ msg: "Error", error: error.message })
        console.log("This is the error", error.message);
    }
}



const postMessage = async function(req, res) {
    try {
        let message = req.body.message
        let user = await userModel.findById(req.params.userId)
        if (!user) return res.status(404).send({ status: false, msg: "No such user exists" })
        let updatedPosts = user.posts
        updatedPosts.push(message)
        let updatedUsers = await userModel.findByIdAndUpdate({ _id: user._id }, { posts: updatedPosts }, { new: true })
        return res.status(200).send({ status: true, data: updatedUsers })
    } catch (error) {
        res.status(500).send({ msg: "Error", error: error.message })
        console.log("This is the error", error.message);
    }
}


module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
module.exports.postMessage = postMessage;