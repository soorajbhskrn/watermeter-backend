const express=require('express');
const {authorize, protect}=require('../middlewares/auth')

const router=express.Router();
const {meterData,getConsumerData,gener}=require("../controllers/muncipality");
const {generateBill}=require("../controllers/bill");

//endpoint to meterReading
router.post('/raspi',authorize('admin'),meterData);
router.get('/getConsumer',authorize('admin'),protect,getConsumerData);
router.get('/generateBill',authorize('admin'),protect,generateBill);


module.exports=router;
