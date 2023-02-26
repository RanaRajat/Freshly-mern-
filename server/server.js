const express = require('express');
const connect = require('./src/config/db.config');
const restaurantController = require('./src/controller/restaurant.controller');
const locationController = require('./src/controller/locations.controller');
const dishesController = require('./src/controller/dishes.controller');
const extrasController = require('./src/controller/extras.controller');
const authController = require('./src/controller/Auth.controller');

const app = express();

app.use(express.json());
app.use("/restaurant",restaurantController);
app.use("/location",locationController);
app.use("/dishes",dishesController);
app.use("/extras",extrasController);
app.use('/auth',authController);

app.get("/",(req,res)=>{

    res.send("hello");
})

app.listen('3456',async()=>{
     await connect();
     console.log('listening on port 3456');
})