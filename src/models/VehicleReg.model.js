const mongoose = require('mongoose');
const VehicleRegistrationSchema = new mongoose.Schema({
  reportingStationName: {
    type: String,
    required: true,
    trim: true,
  },
  driverDetails: {
    driverName: {
      type: String,
      required: true,
      trim: true,
    },
    licenseNumber: {
      type: String,
      required: true,
    },
  },
  vehicleDetails: {
    vehicleNumber: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    ownerName: {
      type: String,
      required: true,
      trim:true
    },
  },
});

module.exports = mongoose.model('Vehicle', VehicleRegistrationSchema);
