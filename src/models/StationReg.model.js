const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const charginStationSchema = new Schema({
  stationName: {
    type: String,
    required: true,
    unique: true,
    trim:true
  },
  stationLocation: {
    type: String,
    required: true,
    trim:true
  },
  numberOfVehicles: {
    type: Number,
    default: 0,
  },
  stationManagers: {
    type: [],
    default:[],
  },
  registeredVehicles:{
    type:[],
    default:[]
  }
});

module.exports = mongoose.model('Station',charginStationSchema);
