const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const models=require('./model.js');
const express= require('express');
const mongoose= require('mongoose');
// const crudfuncs = require('./crudfuncs/crudfuncs');
const cors= require('cors');

const app= express();
mongoose.connect(process.env.CONN_STR,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true

    }).then((conn)=>
    {
    console.log("SUCCESS MONGODB Connection");
    }
    ).catch((err)=>{console.log("ERROR MONGODB")})




    app.listen(process.env.PORT,()=>{
        console.log('Listening on port '+process.env.PORT+"...");
        })