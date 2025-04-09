const express = require("express");
const router = express.Router();

const AddItem= require("../abl/Item/addItem.js");
const CreatedItem= require("../abl/Item/createItem");


router.post("/add", AddItem);
router.post("/create", CreatedItem);
//router.get("/display", DisplayItem);


module.exports = router;