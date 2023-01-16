const express = require("express");
const router = express.Router();
const{addNewVehicle, getAllVehicles,updateVehicle,deleteVehicle}=require("../controllers/vehicleReg.controller")
//Get all vehicles
router.get("/",getAllVehicles)
//Add a new vehicle
router.post("/new",addNewVehicle)
//Update the vehicle
router.patch("/update/:id",updateVehicle)
//Delete a vehicle 
router.delete("/delete/:id",deleteVehicle)


module.exports= router;