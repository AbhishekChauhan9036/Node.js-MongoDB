const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find( {authorName : "HO" } )
    //console.log(allBooks)
    //if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
    //else res.send({msg: "No books found" , condition: false})
    res.send(allBooks)
}


const updateBooks= async function (req, res) {
    let data = req.body 
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , 
    //     { $set: data } 
    //  )
    let allBooks= await BookModel.findOneAndUpdate( 
        { authorName: "ABC"} , 
        { $set: data }, 
        { new: true , upsert: true} , 
     )
     
     res.send( { msg: allBooks})
}

const deleteBooks= async function (req, res) {
    let allBooks= await BookModel.updateMany( 
        { authorName: "FI"} , 
        { $set: {isDeleted: true} }, 
        { new: true } ,
     )
     
     res.send( { msg: allBooks})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.updateBooks= updateBooks
module.exports.deleteBooks= deleteBooks
