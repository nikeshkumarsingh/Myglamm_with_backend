const  express=require("express");
const Makeup=require("../models/sanitizing.model");

const router=express.Router();
router.get("",async (req,res)=>{
    try{
        const sanitizing=await Makeup.find().lean().exec();
        return res.status(200).send(sanitizing)
    }catch(err){
        return res.status(500).send({message:err.message});
    }
});

router.post("",async(req,res)=>{
   try{
       
       const sanitizing =await Makeup.create(req.body);
       return res.status(200).send(sanitizing)
   } 
   catch(err){
    return res.status(500).send({message:err.message})
   }
});


module.exports=router;