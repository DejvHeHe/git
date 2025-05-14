require('dotenv').config(); // Load environment variables from .env
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb'); // ✅ Import ObjectId
const uri = process.env.MONGO_URI;

// Create a MongoClient with options for Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Optional: Automatically connect before any operation
async function ensureConnection() {
  if (!client.topology || !client.topology.isConnected()) {
    await client.connect();
  }
}

// Display all items
async function display() {
  try {
    await ensureConnection(); // Ensure DB is connected
    const resultDisplayItem = await client
      .db("ShopList")
      .collection("items")
      .find()
      .toArray();
    return resultDisplayItem;
  } catch (err) {
    console.error("Chyba při zobrazování shopList:", err);
  }
}

// Get one item by ID
async function get(ID) {
  try {
    await ensureConnection();
    console.log("Looking for item with ID:", ID);

    const objectId = new ObjectId(ID); // ✅ Use ObjectId
    const resultDisplayItem = await client
      .db("ShopList")
      .collection("items")
      .findOne({ _id: objectId });

    console.log("Result:", resultDisplayItem);
    return resultDisplayItem;
  } catch (err) {
    console.error("Chyba při získávání položky:", err);
  }
}

// Create a new item
async function create(item) {
  try {
    await ensureConnection();
    const resultCreateItem = await client
      .db("ShopList")
      .collection("items")
      .insertOne(item);

    console.log("Inserted document ID:", resultCreateItem.insertedId);
    return resultCreateItem;
  } catch (err) {
    console.error("Error inserting document:", err);
  }
}

// Placeholder - currently just logs
async function add(item) {
  console.log(`Item '${item.name}' byl přidán do seznamu '${item.shopList}'.`);
}

// Placeholder - implement as needed
async function uncheck() {
  // Future functionality
}

module.exports = {
  add,
  create,
  get,
  uncheck,
  display
};
