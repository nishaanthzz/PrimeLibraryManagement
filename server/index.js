const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const models=require('./model.js');
const express= require('express');
const mongoose= require('mongoose');
const crudfuncs = require('./cruds')
const cors= require('cors');
const app= express();
app.use(express.json());
app.use(cors());







mongoose.connect(process.env.CONN_STR,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true

    }).then((conn)=>
    {
    console.log("SUCCESS MONGODB Connection");
    }
    ).catch((err)=>{console.log("ERROR from MONGODB")})


app.get('/viewbook/:id',crudfuncs.getBook);
app.get('/books',crudfuncs.getAllBooks);


    app.listen(process.env.PORT,()=>{
        console.log('Listening on port '+process.env.PORT+"...");
        })
app.patch('/postReview/:id',crudfuncs.postReview);
app.patch('/updateViews/:id',crudfuncs.updateViews)
app.post('/postBook',crudfuncs.postBook);