const express = require("express");
const router = express.Router();

const AddItem= require("../abl/Item/addItem");
const CreatedItem= require("../abl/Item/createItem");
const DisplayItem=require("../abl/Item/displayItem");


router.post("/add", AddItem);
router.post("/create", CreatedItem);
router.get("/display", DisplayItem);


module.exports = router;