const Ajv = require("ajv");
const ajv = new Ajv();

const IDDao = require("../../dao/shopList-DAO.js");
const schema = {
    type: "object",
    properties: {
      ID: { type: "string" },
    },
    required: ["ID"],
    additionalProperties: false,
  };
  async function GetList(req,res)
  {
    let ID=req.body;
    // validate input
    const valid = ajv.validate(schema, ID);
    if (!valid) {
      res.status(400).json({
        code: "dtoInIsNotValid",
        list: "dtoIn is not valid",
        validationError: ajv.errors,
      });
      return;
    }
  }