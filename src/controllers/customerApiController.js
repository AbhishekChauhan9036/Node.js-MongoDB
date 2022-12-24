const cmodel=require("../models/productModel")
const newmodel=require("../models/userModel")
const CountModel=require('../models/counterModel')

const preCustom=async function(req,res){
    let data=req.body
    let a=await cmodel.create(data)
    res.send({msg:a})
}


const preCad=async function(req,res){
    let x=await CountModel.findOneAndUpdate(
        {"id":"Cha"},
        {"$inc":{"seq":1}},
        {new:true,upsert:true})
    
    let data=req.body
    let {cardNumber,cardType,customerName,status,vision,customerId}=data
    
    cardNumber='C00'+x['seq']
    let z={cardNumber,cardType,customerName,status,vision,customerId}
    let a=await newmodel.create(z)
    res.send({msg:a})
}


const getCustomAPI=async function(req,res){
    let reqCustomers=await cmodel.find({status:{$eq:"ACTIVE"}})
    res.send({msg:reqCustomers})
}

const postCustomAPI=async function(req,res){
    let createData=req.body
    let updatedData=await cmodel.create(createData)
    res.send({msg:updatedData})
}


const flagCustomAPI=async function(req,res){
    let updatedData=await cmodel.findOneAndUpdate({"firstName":"Jaiassignment"},{$set:{isDeleted:true}},{new:true})
    res.send({msg:updatedData})
}



const getCardAPI=async function(req,res){
    let reqCard=await newmodel.find()
    res.send({msg:reqCard})
}



module.exports.preCustom=preCustom;
module.exports.preCad=preCad;
module.exports.postCustomAPI=postCustomAPI;
module.exports.flagCustomAPI=flagCustomAPI;
module.exports.getCardAPI=getCardAPI;
module.exports.getCustomAPI=getCustomAPI;