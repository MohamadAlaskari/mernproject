// creat server
const express = require("express")

const app = express()

// Allow cross-origin requests
const cors = require("cors")
app.use(cors());


// connect to DB
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://Mohamad:96MoAl96@cluster0.wujtyez.mongodb.net/mernproject?retryWrites=true&w=majority")


// import UserModel
const UserModel = require('./models/Users')

app.get("/users", async (req, res) => {
    const users = await UserModel.find();
    res.json(users)
})


// creat port
app.listen("3001", () => {
    console.log("Server Work")
})