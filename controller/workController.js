const contactmodel=require("../model/contactModel");
const servicemodel=require("../model/serviceModel");
const paymodel=require("../model/payModel");
// import razorpay from "razorpay";
// import crypto from "crypto";

const addWorkForce=async(req,res)=>{
    try{
    const {name,mobileNo,altmobileNo,work,address,workexperiences,workpay,workforceid}=req.body;
    if(!name||!mobileNo||!altmobileNo||!work
        ||!address||!workexperiences||!workpay||!workforceid)
    {
        return res.status(401).json({
            message:"please provide full details",
            success:false
        })
    }
    const service=new servicemodel(req.body);
    await service.save();
    return res.status(201).json({
        message:"workForce added success",
        success:true
    })
}catch(err){
    return res.status(500).json({
        message:"err in workforce adding",
        success:false
    })
}
}
const contactController=(req,res)=>{
    try{
        const {name,phoneNo,work,address,workforceid}=req.body;
        if(!name||!phoneNo||!work
            ||!address||!workforceid)
        {
            return res.status(401).json({
                message:"please provide full details",
                success:false
            })
        }
        const contact=new contactmodel(req.body);
        contact.save();

        return res.status(201).json({
            message:"sending request success",
            success:true
        })
        
    }catch(err){
        return res.status(500).json({
            message:"err in sending request",
            success:false
        })
    }
}
const payController=async(req,res)=>{
    try{
    const {name,mobileNo,work,address,workpay,workforceid,hourtowork,totalamount}=req.body;
    if(!name||!mobileNo||!hourtowork||!work
        ||!address||!totalamount||!workpay||!workforceid)
    {
        return res.status(401).json({
            message:"please provide full details",
            success:false
        })
    }
    // const options={
    //     amount:Number(totalamount),
    //     currency:"INR",
    //     receipt:crypto.randomBytes(10).toString("hex");

    // }
    // razorpayInstance.orders.create(options,(error,order)=>{
    //     if(error){
    //         consoel.log(error);
    //         return res.status(500).json({
    //             message:"Something went wrong",
    //             success:false
    //         })
    //     }
    //     return res.status(200).json({
    //         data=order
    //     })
    //     console.log(order)
    // })
    const pay=new paymodel(req.body);
    pay.save();
    return res.status(201).json({
        message:"pay success",
        success:true
    })
}catch(err){
    return res.status(500).json({
        message:"err in pay",
        success:false
    })
}
}
const getworkforceController=async(req,res)=>{
    try{
        const data=await servicemodel.find({});
        return res.status(200).json({
            message:"data fetch success",
            success:true,
            data
        })
    }
    catch(err){
        return res.status(500).json({
            message:"err in getwork",
            success:false
        })
    }

}
module.exports={addWorkForce,payController,contactController,getworkforceController}