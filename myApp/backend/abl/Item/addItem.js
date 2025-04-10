const Ajv = require("ajv");
const ajv = new Ajv();

const itemDao = require("../../dao/item-DAO");
const listDao = require("../../dao/shopList-DAO");

const schema = {
  type: "object",
  properties: {
    name: { type: "string" },
    shopList: { type: "string" },
    count: { type: "integer" },
  },
  required: ["name", "shopList"],
  additionalProperties: false,
};

async function AddItem(req, res) {
  try {
    let item = req.body;

    // validate input
    const valid = ajv.validate(schema, item);
    if (!valid) {
      return res.status(400).json({
        code: "dtoInIsNotValid",
        category: "dtoIn is not valid",
        validationError: ajv.errors,
      });
    }

    item.state = true;

    // get all shop lists
    const shopLists = await listDao.display();
    const targetList = shopLists.find(list => list.name === item.shopList);

    // check if the specific shop list exists
    if (!targetList) {
      return res.status(400).json({
        code: "InvalidShopList",
        message: `Nakupní seznam s názvem '${item.shopList}' neexistuje`,
      });
    }

    // add item to the list's items array
    if (!Array.isArray(targetList.items)) {
      targetList.items = [];
    }
    targetList.items.push(item);

    // save the item (you may also need to save the updated list here)
    const addedItem = await itemDao.add(item);

    res.json(addedItem);
  } catch (e) {
    res.status(500).json({ error: e.message || "Nastala chyba." });
  }
}

module.exports = AddItem;
