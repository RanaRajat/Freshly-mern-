const mongoose  = require("mongoose");

const extrasSchema = new mongoose.Schema({
    name: {type:String, required:true},
    price: {type:Number, required:true},
    veg:{type:Number, required:true},
        
},{
    versionKey: false,
    timestamp: true,
})

const extras = mongoose.model('extras',extrasSchema);

module.exports = extras;