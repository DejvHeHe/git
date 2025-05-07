const express = require("express");
const router = express.Router();

const AddItem= require("../abl/Item/addItem");
const CreatedItem= require("../abl/Item/createItem");
const UncheckItem=require("../abl/Item/uncheckItem");
const GetItem=require("../abl/Item/getItem")



router.post("/add", AddItem);
router.post("/create", CreatedItem);
router.post("/uncheck",UncheckItem);
router.get("/get",GetItem)



module.exports = router;