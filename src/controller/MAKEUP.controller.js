const express = require("express");
const Makeup = require("../models/MAKEUP.model");

const router = express.Router();
router.get("", async (req, res) => {
  try {
    const makeup = await Makeup.find().lean().exec();
    return res.status(200).send(makeup);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("", async (req, res) => {
  try {
    const makeup = await Makeup.create(req.body);
    return res.status(200).send(makeup);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
