const express =require("express")
const router=express.Router();
const authenticate = require("../middlewares/authenticate")
const Registration=require("../models/registration.model ")
router.post("", async(req,res)=>{

    try {
        const registration=await registration.create(req.body)
        return res.status(200).send(registration)    
        
    } catch (error) { 
        return res.status(400).send({message:error.message})

        
    }  
})
router.get("", async (req, res) => {
    try{
        const registration = await registration.find()
        return res.status(200).send(registration)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
})

module.exports=router