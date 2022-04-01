const express=require("express");
const cors=require("cors");
const productcontroller=require("./controller/product.controller");
const skincarecontroller=require("./controller/skincare.controller");
const makeupcontroller=require("./controller/MAKEUP.controller");

const usersController = require("./controller/users.controllers");
const productsController = require("./controller/products.controller ");


const {register,login}=require("./controller/auth.controller")


 const app=express();
 app.use(cors());
 app.use(express.json());
 app.use("/products",productcontroller);
 app.use("/skincares",skincarecontroller);
 
 app.use("/makeups",makeupcontroller);
 

app.use("/users", usersController); 
app.post("/register",register)
app.post("/login",login)
app.use("/products1", productsController)


module.exports=app;




