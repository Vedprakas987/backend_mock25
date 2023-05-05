const express = require("express")
const { SubjectModal } = require("../model/physics.model")
const markRouter=express.Router()
markRouter.use(express.json())
markRouter.get("/",async (req,res)=>{
    try{
   const data = await SubjectModal.find()
   res.status(200).send(data)
    }catch(err){
        res.status(400).send({msg:err.massage})
    }
})

markRouter.post("/",async (req,res)=>{
    const payload = req.body
    try{
       const  newdata = new  SubjectModal(payload)
       await newdata.save()
        res.status(200).send("data is posted")
    }catch(err){
        res.status(400).send({msg:err.massage})
    }
})

module.exports={
    markRouter
}