const express = require("express");
const app = express();
const mongoose = require("mongoose");
const registerVehicle = require("./src/routes/vehicleRegistration.route")
require('dotenv').config()
app.use(express.json())

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
app.use("/register",registerVehicle)
