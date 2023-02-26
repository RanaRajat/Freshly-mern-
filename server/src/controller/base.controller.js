const express = require("express");
const router = express.Router();


const get = (model)=>async(req,res)=>{
    try{
   const result = await model.find().lean().exec();
   return res.status(201).send(result);
    }
    catch(e){
        return res.status(404).send({message:e});
    }
}
const count = (model)=>async(req,res)=>{
    try{
   const result = await model.find().count();
   return res.status(201).send({count:result});
    }
    catch(e){
        return res.status(404).send({message:e});
    }
}
const getOne = (model)=>async(req,res)=>{
    try{
    const result = await model.findOne(req.params.id).lean().exec();
    return res.status(201).send(result);
    }
    catch(e){
        return res.status(404).send({message:e});
    }
 }

const post = (model)=>async(req,res)=>{
    try{
    const result = await model.create(req.body);
    return res.status(201).send(result);
    }catch(e){
        return res.status(404).send({message:e});
    }
 }

 const patch = (model)=>async(req,res)=>{
    try{
    const result = await model.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.status(201).send(result);
    }
    catch(e){
        return res.status(404).send({message:e});
    }
 }

 const deleteOne = (model)=>async(req,res)=>{
    try{
    const result = await model.findByIdAndDelete(req.params.id);
    return res.status(201).send({message:"deleted successfully"});
    }
    catch(e){
        return res.status(404).send({message:e});
    }
 }


module.exports = {
    get,
    getOne,
    deleteOne,
    patch,
    post,
    count
};