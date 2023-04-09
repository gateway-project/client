const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ result: "success" });
});

module.exports = router;
