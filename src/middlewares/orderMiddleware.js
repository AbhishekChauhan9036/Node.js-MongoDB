const productM=require("../models/productModel")
const UserM=require('../models/Usersmodel')

const usermid=async function(req,res,next){
    let x=Object.keys(req.headers)
    if(x.includes('isfreeappuser')==true){
       req.body['isFreeAppUser']=req.headers['isfreeappuser']
        next()
    }else{
        res.send({error:"missing a mandatory header"})
    }
}
module.exports.usermid=usermid;