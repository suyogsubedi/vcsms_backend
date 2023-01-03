const express = require("express");
const router = express.Router();

router.get("/vehicle",(req,res)=>{
    res.json("Vehicle Registration Page")
})

module.exports= router;