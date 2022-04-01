const express = require("express");
const Lipstick = require("../models/lipsticks.model");

const router = express.Router();
router.get("", async (req, res) => {
  try {
    const lipstick = await Lipstick.find().lean().exec();
    return res.status(200).send(lipstick);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("", async (req, res) => {
  try {
    const lipstick = await Lipstick.create(req.body);
    return res.status(200).send(lipstick);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
