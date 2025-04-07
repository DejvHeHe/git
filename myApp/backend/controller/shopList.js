const express = require("express");
const router = express.Router();

//const GetAbl = require("../abl/category/getAbl");
const CreateList = require("../abl/ShopList/createList");


//router.get("/get", GetAbl);
router.post("/create", CreateList);


module.exports = router;