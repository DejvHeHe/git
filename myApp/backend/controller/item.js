const express = require("express");
const router = express.Router();

const addItem= require("../abl/Item/addItem");



router.post("/add", addItem);


module.exports = router;