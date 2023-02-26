const mongoose  = require("mongoose");

const locationsSchema = new mongoose.Schema({
    city: {type:String, required:true},
    state: {type:String, required:true},
    pincode: {type:String, required:true,min: 100000, max: 999999},
    country:{type:String, required:true},
},{
    versionKey: false,
    timestamp: true,
})

const locations = mongoose.model('locations',locationsSchema);

module.exports = locations;