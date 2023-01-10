const express = require("express")
const router = express.Router()
const {addStation,deleteStation, updateStation,getAllStation,getSingleStation}= require("../controllers/stationReg.controller")

// get all station
router.get("/",getAllStation)
// new station reg
router.post("/new-station",addStation)
//delete station
router.delete("/delete",deleteStation)
// update station
router.patch("/update/:station",updateStation)
//get single station
router.get("/:station",getSingleStation)

module.exports= router;