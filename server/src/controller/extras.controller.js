const express = require("express");
const extras = require("../model/extras.model");
const base = require('./base.controller');

const router = express.Router();


router.get('/',base.get(extras))
router.get('/count',base.count(extras))
router.post('/',base.post(extras))
router.patch('/:id',base.patch(extras))
router.delete('/:id',base.deleteOne(extras))
router.get('/:id',base.getOne(extras))



module.exports = router;