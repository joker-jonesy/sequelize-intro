// grabbing the express library
const express = require('express');

// init express app
const app = express();

// a lot more here

const characterRouter = require('./routes');
const {db}=require('./db');

const setup = async ()=>{
    try{

    //     send hello world back at the base url
        app.get('/', function(req, res){
            res.send("<h1>Hello World</h1>")
        })

    //     routes to other things in my app
        app.use('/characters', characterRouter);

    //     error handling
         app.use((err, req, res)=>{
             console.log("Error is", err.status);
             const status = err.status || 500;
             res.status(status).send(err.message);
         })

    //     sync database
         await db.sync();

    //     listening on port
        app.listen(8080, ()=>{
            console.log("listening on port 8080")
        })

    } catch (e) {
        console.log(e);
    }
}

setup();
