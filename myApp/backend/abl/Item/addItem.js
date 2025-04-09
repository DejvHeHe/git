const Ajv = require("ajv");
const ajv = new Ajv();

const itemDao = require("../../dao/item-DAO");

const schema = {
  type: "object",
  properties: {
    name: { type: "string" },
    shopList:{type:"string"},
    count:{type:"integer"},
    
  },
  required: ["name","shopList"],
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

    
    item.state=true
    // create new item
    const createdItem = await itemDao.add(item);

    res.json(createdItem);
  } catch (e) {
    res.status(500).json({ error: e.message || "Nastala chyba." });
  }
}
module.exports = AddItem;