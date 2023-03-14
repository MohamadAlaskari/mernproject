const express = require("express")
const app= express()

const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://Mohamad:96MoAl96@cluster0.wujtyez.mongodb.net/mernproject?retryWrites=true&w=majority")
tz

app.get("/",(req, res)=>{
    res.send("test")
}) 

app.listen("3001",()=>{
    console.log("Server Work good")
})