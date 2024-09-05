const mongoose=require("mongoose");

const mongooseSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobileNo:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})
const user=mongoose.model('user',mongooseSchema);
module.exports=user;