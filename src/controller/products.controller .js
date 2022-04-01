const express =require("express")
const router=express.Router();
const authenticate = require("../middlewares/authenticate")
const Product=require("../models/products.model")
router.post("", authenticate, async(req,res)=>{

    try {
        const product=await Product.create(req.body)
        return res.status(200).send(product)    
        
    } catch (error) { 
        return res.status(400).send({message:error.message})

        
    }  
})
router.get("", authenticate, async (req, res) => {
    try{
        const product = await Product.find()
        return res.status(200).send(product)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
})

module.exports=router