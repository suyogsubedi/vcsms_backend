const express = require("express")
const app = express()
const port = 5000
app.get("/",(req,res)=>{
    res.json("Hello From VCSMS Backend")
})
app.listen(port,()=>{
    console.log("server running on port",port)
})