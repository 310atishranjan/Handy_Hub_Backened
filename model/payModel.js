const mongoose=require("mongoose");

const paySchema=new mongoose.Schema({
    workforceid:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true
    },
    mobileNo:{
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
    hourtowork:{
        type:Number,
        required:true
    },
    workpay:{
        type:Number,
        required:true
    },
    totalamount:{
        type:Number,
        required:true
    }
},{timestamps:true})

const pay=mongoose.model("pay",paySchema);

module.exports=pay;