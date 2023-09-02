// creat server
const express = require("express")
const app = express()
// creat port
const _port = "3001"
app.listen(_port, () => {
    console.log(`Server Work!, Server started on port ${_port}`)
})

// Allow cross-origin requests
const cors = require("cors")
app.use(cors());

//wir keine leere data in consol.log() bei req.data in app.js  
app.use(express.json())



// connect to MongoDB
const mongoose = require("mongoose")
const username = process.env.USERNAME,
    password = process.env.PASSWORD,
    database = process.env.DATABASE;
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.rfpju1y.mongodb.net/${database}?retryWrites=true&w=majority`)
    .then(() => {
        console.log('MongoDB-Verbindung erfolgreich hergestellt!');
    }).catch(err => {
        console.error('Fehler beim Herstellen der MongoDB-Verbindung:', err);
    });

/*Models*/
// import UserModel
const UserModel = require('./models/Users')

// get request
app.get("/users", async (req, res) => {
    const users = await UserModel.find();
    res.status(200).json(users)
})

// post request create user
app.post("/createUser", async (req, res) => {
    const user = req.body
    const newUser = new UserModel(user)
    await newUser.save()
    res.json({ message: "User created successfully" })
})


// delete request
app.delete("/deleteUser/:id", async (req, res) => {
    const { id } = req.params;
    await UserModel.findByIdAndDelete(id)
    res.json({ message: "User deleted successfully" })
})

// put request update user by id
app.put("/updateUser/:id", async (req, res) => {
    const { id } = req.params
    const user = req.body
    await UserModel.findByIdAndUpdate(id, user)
    res.json({ message: "User updated successfully" })
})

