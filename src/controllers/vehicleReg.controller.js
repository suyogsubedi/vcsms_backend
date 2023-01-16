const Vehicle = require('../models/VehicleReg.model');
const { getAll,create, updateData,deleteData } = require('../utils/CRUD Helpers/CRUD.helpers');

const addVehicle = async (req, res) => {};

// Get all vehicles
const getAllVehicles = getAll(Vehicle)
// Add a new vehicle
const addNewVehicle = create(Vehicle)
// Update a vehicle
const updateVehicle = updateData(Vehicle)
//Delete a vehicle
const deleteVehicle = deleteData(Vehicle)

module.exports = { addNewVehicle, getAllVehicles,updateVehicle,deleteVehicle };
