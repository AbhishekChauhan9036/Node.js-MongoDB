const mongoose=require('mongoose')
 
const bookSchema= new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    author: String,
     tags: [ String ],
     year: Number,
    prices: {
        indianPrice: Number,
        europeanPrice: Number,
        japanPrice: Number
    },
     totalPages : Number,
     stockAvailable:Boolean
}, {timestamps: true} )
 
module.exports = mongoose.model( 'book', bookSchema )
