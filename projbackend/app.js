
require("dotenv").config();
const mongoose = require('mongoose');

const express=require('express');
const bodyparser=require('body-parser');
const cookieparser=require('cookie-parser');
const cors=require('cors');
const app=express()


//My routes
const authRoutes=require("./routes/authentication")
const userRoutes=require('./routes/user')
const categoryRoutes=require('./routes/category')

mongoose.connect(process.env.DATABASE).then(() => {
    console.log("DB connection");
})
//MiddleWares
app.use(bodyparser.json())
app.use(cookieparser())
app.use(cors())

//My Routes
app.use("/api",authRoutes)
app.use("/api",userRoutes)
app.use("/api",categoryRoutes)
//Port
const port =process.env.PORT || 8000;

//Starting a server
app.listen(port,() => {
    console.log(`app is running at port ${port}`);
})