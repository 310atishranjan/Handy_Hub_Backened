const express=require("express");
const { payController, addWorkForce, contactController, getworkforceController } = require("../controller/workController");
// import razorpay from "razorpay";
const router=express.Router();

// const raazorpayInstance=new Razorpay({
//     key_id:process.env.RAZORPAY_ID,
//     key_secret:process.env.KEY_SECRET
// })

router.post('/add-workforce',addWorkForce);
router.post('/pay',payController);

router.post('/contact',contactController);
router.get('/get-workforce',getworkforceController);

module.exports=router;