const mongoose=require("mongoose");

const mongooseSchema=new mongoose.Schema({
    workforceid:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    mobileNo:{
        type:Number,
        required:true
    },
    altmobileNo:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    work:{
        type:String,
        required:true
    },
    workexperiences:{
        type:String,
        required:true
    },
    workpay:{
        type:Number,
        required:true
    }
},{timestamps:true})

const service=mongoose.model('service',mongooseSchema);
module.exports=service;