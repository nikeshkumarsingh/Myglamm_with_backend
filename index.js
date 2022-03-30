const express=require("express");
const cors=require("cors");
const productcontroller=require("./controller/product.controller");
const skincarecontroller=require("./controller/skincare.controller")

 const app=express();
 app.use(cors());
 app.use(express.json());
 app.use("/products",productcontroller);
 app.use("/skincares",skincarecontroller);
 module.exports=app;
