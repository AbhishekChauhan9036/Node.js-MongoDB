const customModel=require("./Customm")
const mongoose=require('mongoose')
const Customm = require("./Customm");

let ObjectId=mongoose.Schema.Types.ObjectId

const catSchema=new mongoose.Schema({
    cardNumber:String,
    cardType:{
        type:String,
        enum:['REGULAR','SPECIAL']
    },
    customerName:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:['ACTIVE','INACTIVE'],
        default:'ACTIVE'
    },
    vision:String,
    customerId:{
        type:ObjectId,
        ref:"Custom",
        
        
    },
    isDeleted:{
        type:Boolean,
        enum:[true,false]
    }

})

module.exports=mongoose.model('Card',catSchema)
