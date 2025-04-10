const itemDao = require("../../dao/item-DAO");
async function DisplayItems(req, res) {
  try {
    const Item = await itemDao.display(); // přidáno await
    res.json({ itemList: Item });
    
  } catch (e) {
    res.status(500).json({ category: e.category || "unknown_error" });
  }
}

module.exports = DisplayItems;