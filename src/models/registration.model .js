const mongoose = require("mongoose");

const registrationSchema = mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Registration = mongoose.model("registration", registrationSchema);
module.exports = Registration;
