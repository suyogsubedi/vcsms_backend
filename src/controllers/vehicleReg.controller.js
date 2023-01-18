const Vehicle = require('../models/VehicleReg.model');
const Station = require('../models/StationReg.model');
const {
  getAll,
  create,
  updateData,
  deleteData,
} = require('../utils/CRUD Helpers/CRUD.helpers');

const addVehicle = async (req, res) => {};

// Get all vehicles
const getAllVehicles = getAll(Vehicle);
// Add a new vehicle
// **--> Add New Vehicle Garda reportingStationName ma haleko station cha ki nai check garna parcha
// **--> Ya Add Garne Bitikai Station Manager ko model ma auta naya list of vehicle bhanera haldida huncha
// const addNewVehicle = create(Vehicle)
const addNewVehicle = async (req, res) => {
  const {driverDetails,vehicleDetails,reportingStationName } = req.body;
  // checking if the station exists
  const stationExists = await Station.findOne({
    stationName: reportingStationName.trim(),
  });
  console.log("Vehicle Reg Controller",stationExists)    
  if(stationExists===null){
    return res.json("The station provided does not exists")
  }
  const newVehicle = new Vehicle({
    driverDetails:driverDetails,
    vehicleDetails:vehicleDetails,
    reportingStationName:reportingStationName
  })
  try{
    //After saving new vehicle we are adding this to its, charing station
    await newVehicle.save().then(async()=>{
        await stationExists.registeredVehicles.push(newVehicle)
        stationExists.save()
    })
    
    return res.json({data:newVehicle})
  }catch(error){
    if(error.code===11000){
        return res.json(`Vehicle with number ${vehicleDetails.vehicleNumber} already exists`)
    }
    return res.json(error)
  }

};
// Update a vehicle
const updateVehicle = updateData(Vehicle);
//Delete a vehicle
const deleteVehicle = deleteData(Vehicle);
//Get Single Vehicle Data

module.exports = {
  addNewVehicle,
  getAllVehicles,
  updateVehicle,
  deleteVehicle,
};
