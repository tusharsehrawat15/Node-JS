const express = require("express");

const { logReqRes } = require("./middlewares");
const mongoose = require("mongoose");

const userRouter = require("./Routes/user");
const {connectMongoDb} = require("./views/connection")

const app = express();
const PORT = 8000;


//connection
connectMongoDb("mongodb://127.0.0.1:27017/app-1").then(()=> console.log("MongoDb connected"));


//Middleware - Plugin
app.use(express.urlencoded({extended: false}));
app.use(logReqRes("log.txt"));


//Routes
app.use("/api/users", userRouter);

app.listen(PORT, ()=> console.log(`Server started at PORT: ${PORT}`))
