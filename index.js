const express = require("express");

const app = new express();

app.get('/',(req,res)=>{
  res.json({
    name:"ass",
    statusCode:200
  })
})

app.listen(3001,()=>{
  console.log("App is running")
})