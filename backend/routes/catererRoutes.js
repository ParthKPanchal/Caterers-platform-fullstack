const express = require("express");

const {
  getCaterers,
  getSingleCaterer,
  createCaterer,
} = require("../controllers/catererController");

const router = express.Router();

router.get("/", getCaterers);

router.get("/:id", getSingleCaterer);

router.post("/", createCaterer);

module.exports = router;