const mongoose = require('mongoose');
const VehicleRegistrationSchema = new mongoose.Schema({
  reportingStationName: {
    type: String,
    required: true
  },
  driverDetails: {
    driverName: {
      type: String,
      required: true
    },
    licenseNumber: {
      type: String,
      required: true
    },
  },
  vehicleDetails: {
    vehicleNumber: {
      type: String,
      required: true
    },
    ownerName: {
      type: String,
      required: true
    },
  }
});

module.exports = mongoose.model('VehicleRegistration', VehicleRegistrationSchema);
