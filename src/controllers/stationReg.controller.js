const Station = require('../models/StationReg.model');
const User = require('../models/User.model');

const addStation = async (req, res) => {
  const { stationName, stationLocation, numberOfVehicles, stationManagers } =
    req.body;
  //checking if username provided exists
  const userExists = await User.findOne({ username: stationManagers });
  if (userExists === null) {
    return res.json('This user is not registered, Register the user first');
  }
  const stationExists = await Station.find({
    stationName: stationName.trim(),
  });
  //if there is station with this name then we won't have empty response
  if (stationExists != '') {
    return res
      .json(
        `Charging station with name ${stationName} already exists.Use unique name`,
      );
  }
  const newStation = new Station({
    stationName: stationName,
    stationLocation: stationLocation,
    numberOfVehicles: numberOfVehicles,
    stationManagers: stationManagers
  });
  try {
    await newStation.save();
    return res.json('Registered Successfully');
  } catch (error) {
    return res.json(error);
  }
};

const deleteStation = async (req, res) => {
  const { stationName } = req.body;
  const station = await Station.find({ stationName: stationName });
  if (station != '') {
    await Station.deleteOne({ stationName: stationName });
    return res.json('Station Deleted');
  }
  return res.json('Station Not Found');
};


const updateStation = async (req, res) => {
  const stationName = req.params.station.trim();
  const station = await Station.findOne({ stationName: stationName });
  console.log(station.stationManagers);
  if (station == '') {
    return res.json('No Station Found');
  }
  if (req.body.stationName) {
    station.stationName = req.body.stationName;
  }
  if (req.body.stationLocation) {
    station.stationLocation = req.body.stationLocation;
  }
  if (req.body.numberOfVehicles) {
    station.numberOfVehicles = req.body.numberOfVehicles;
  }

  if (
    req.body.stationManagers &&
    !station.stationManagers.includes(req.body.stationManagers)
  ) {
    const userExists = await User.findOne({
      username: req.body.stationManagers,
    });
    if (userExists == null) {
      return res.json('The User Does Not Exist');
    }
    station.stationManagers.push(req.body.stationManagers);
  }
  await station.save();
  return res.json(station);
};

const getAllStation = async(req,res)=>{
  const allStation = await Station.find()
  return res.json(allStation)
}
const getSingleStation = async(req,res)=>{
  const stationName = req.params.station.trim();
  const station = await Station.findOne({stationName:stationName})
  return res.json(station)

}
module.exports = { addStation, deleteStation, updateStation,getAllStation,getSingleStation };
