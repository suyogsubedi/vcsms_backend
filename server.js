const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors')
const registerVehicle = require("./src/routes/vehicleRegistration.route")
const userRoutes = require("./src/routes/user.route")
const registerStation = require("./src/routes/stationReg.route")
require('dotenv').config()
app.use(express.json())
app.use(cors())

// database connection
try {
    mongoose.connect(process.env.MONGODB_URI).then(() => {
      console.log("Connected to the database successfully")
      port = process.env.PORT
      app.listen(port, () => {
        console.log(`VCSMS Backend Listening At Port: ${port}`);
        console.log(`http://localhost:${port}`);
      }); 
    });
  } catch {
    console.log("Not Connected");
  }

app.get("/",(req,res)=>{
    res.json("Hello From VCSMS Backend")
})
app.use("/api/register",registerVehicle)
app.use("/api/user",userRoutes)
app.use("/api/station",registerStation)
