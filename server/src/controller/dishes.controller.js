const express = require("express");
const verifyToken = require("../middleware/validate");
const dishes = require("../model/dishes.model");
const base = require('./base.controller');

const router = express.Router();


router.get('/',verifyToken,base.get(dishes))
router.get('/count',base.count(dishes))
router.post('/',base.post(dishes))
router.patch('/:id',base.patch(dishes))
router.delete('/:id',base.deleteOne(dishes))
router.get('/:id',base.getOne(dishes))

module.exports = router;