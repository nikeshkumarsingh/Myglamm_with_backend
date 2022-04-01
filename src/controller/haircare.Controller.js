const express = require("express");
const Haircare = require("../models/haircare.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const haircare = await Haircare.find().lean().exec();
    return res.status(200).send(haircare);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("", async (req, res) => {
  try {
    const haircare = await Haircare.create(req.body);
    return res.status(200).send(haircare);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
