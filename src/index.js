
const express = require("express");
const cors = require("cors");
const productcontroller = require("./controller/product.controller");
const skincarecontroller = require("./controller/skincare.controller");
const makeupcontroller = require("./controller/MAKEUP.controller");
const lipstickController = require("./controller/lipstick.controller");
const haircareController = require("./controller/haircare.Controller");
const usersController = require("./controller/users.controllers");
const registrationController = require("./controller/registration.controller ");
const { register, login } = require("./controller/auth.controller");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/products", productcontroller);
app.use("/makeups", makeupcontroller);
app.use("/lipstick",lipstickController );
app.use("/haircare", haircareController);
app.use("/skincares", skincarecontroller);
app.use("/users", usersController);
app.post("/register", register);
app.post("/login", login);
app.use("/registration", registrationController);
app.use("/makeups", makeupcontroller);

module.exports = app;
