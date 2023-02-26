const mongoose  = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    name: {type:String, required:true},
    status:{type:String, default:1},
    rating:{type:Number, required:true},
    location_id: {type:mongoose.Schema.Types.ObjectId,ref:"locations",required:true},
    dish_id:[{type:mongoose.Schema.Types.ObjectId,ref:"dishes",required:true}]

},{
    versionKey: false,
    timestamp: true,
})

const restaurantModel = mongoose.model('restaurant',restaurantSchema);

module.exports = restaurantModel;