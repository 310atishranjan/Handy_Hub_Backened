const mongoose=require("mongoose");

const contactSchema=new mongoose.Schema({
    name:{
        type:String,
        reuired:true
    },
    address:{
        type:String,
        reuired:true
    },
    phoneno:{
        type:String,
        reuired:true
    },
    work:{
        type:String,
        required:true
    },
    workforceid:{
        type:Number,
        reuired:true
    }
},{timestamps:true})

const contact=mongoose.model("contact",contactSchema);
module.exports=contact;