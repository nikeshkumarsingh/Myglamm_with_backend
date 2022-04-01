const mongoose = require("mongoose");

const makeupSchema = new mongoose.Schema(
  {
    Name: { type: String, required: true },
    Price: { type: Number, required: true },
    Description: { type: String, required: true },
    Use: { type: String, required: true },
    benifit: { type: String, required: true },
    exproperty: { type: String, required: true },
    Image1: { type: String, required: true },
    Image2: { type: String, required: true },
    Image3: { type: String, required: true },
    Image4: { type: String, required: true },
    Image5: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("makeup", makeupSchema);
