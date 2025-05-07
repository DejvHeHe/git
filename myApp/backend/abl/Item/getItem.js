const itemDao = require("../../dao/item-DAO");

async function GetItems(req, res) {
  try {
    const items = await itemDao.get(); 
    res.json({ itemList: items });
    
  } catch (e) {
    res.status(500).json({ category: e.category || "unknown_error" });
  }
}


module.exports = GetItems;
