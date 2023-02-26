const mongoose  = require("mongoose");

const dishesSchema = new mongoose.Schema({
    name: {type:String, required:true},
    subHeading:{type:String},
    price: {type:Number, required:true},
    popularity: {type:String, required:true},
    veg:{type:Number, required:true},
    status:{type:Number, required:true},
    origin:{type:String, required:true},
    variation:{type:String},
    ingredients:{type:Array},
    thumbnails:{type:Array},
    details:{type:String},
    calories:{type:Array},
    img:{type:String,required:true},
    extras:[{type:mongoose.Schema.Types.ObjectId,ref:"extras"}]
},{
    versionKey: false,
    timestamp: true,
})

const dishes = mongoose.model('dishes',dishesSchema);

module.exports = dishes;