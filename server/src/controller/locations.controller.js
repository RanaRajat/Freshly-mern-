const express = require("express");
const locationModel = require("../model/locations.model");
const base = require('./base.controller');

const router = express.Router();


router.get('/',base.get(locationModel))
router.get('/count',base.count(locationModel))
router.post('/',base.post(locationModel))
router.patch('/:id',base.patch(locationModel))
router.delete('/:id',base.deleteOne(locationModel))
router.get('/:id',base.getOne(locationModel))

module.exports = router;