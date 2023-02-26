const express = require("express");
const  base  = require("./base.controller");
const restaurantModel = require("../model/restaurants.model");

const router = express.Router();

router.get('/',base.get(restaurantModel))
router.get('/count',base.count(restaurantModel))
router.post('/',base.post(restaurantModel))
router.patch('/:id',base.patch(restaurantModel))
router.delete('/:id',base.deleteOne(restaurantModel))
router.get('/:id',base.getOne(restaurantModel))

router.get('/complete/:id',async(req,res)=>{
    const result = await restaurantModel.findById(req.params.id).populate('dish_id').populate('location_id').lean().exec();
    res.send(result);
})
module.exports = router;