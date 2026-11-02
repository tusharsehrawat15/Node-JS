const express = require("express");
const users = require("./MOCK_DATA.json");
const { default: mongoose } = require("mongoose");
const mongoose = require("mongoose");
const app = express();
const PORT = 8000;


//connection
mongoose.connect("mongodb://127.0.0.1:27017/app-1")
.then(()=> console.log("MongoDB Connected"))
.catch((err) => console.log("Mongo Error", err));


//Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jobTitle: {
        type: String,
    },
    gender: {
        type: String,
    }
})

const userSchema = mongoose.model("user", userSchema);

//Routes
app.get("/api/users", (req, res) => {
    return res.json(users);
});

app.get("/api/users/:id", (req, res)=>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
});

app.listen(PORT, ()=> console.log(`Server started at PORT: ${PORT}`))
