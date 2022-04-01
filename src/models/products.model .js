const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    title:{type:String,required:true,unique:true},
    price:{type:Number,required:true}
},{
    timestamps:true,
    versionKey:false,
});
const product=mongoose.model("product",productSchema)
module.exports=product