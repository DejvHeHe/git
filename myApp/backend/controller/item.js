const express = require("express");
const router = express.Router();

const AddItem= require("../abl/Item/addItem");
const CreatedItem= require("../abl/Item/createItem");
const UncheckItem=require("../abl/Item/uncheckItem");
const GetItem=require("../abl/Item/displayItem")



router.post("/add", AddItem);
router.post("/create", CreatedItem);
router.post("/uncheck",UncheckItem);
router.get("/display",GetItem)



module.exports = router;