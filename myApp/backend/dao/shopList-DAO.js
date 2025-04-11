
require('dotenv').config(); // načte proměnné z .env
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGO_URI;



// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function display() {
  try {
    const resultDisplay = await client.db("ShopList").collection("shopList").find().toArray(); // převod na pole    
    return resultDisplay; // můžeš i vrátit, pokud chceš s daty dál pracovat
    
  } catch (err) {
    console.error("Chyba při zobrazování shopList:", err);
  }
}
async function update(item, targetList) {
  try {
    // Zkontroluj, zda položka existuje
    const existingItem = targetList.items.find(i => i.name === item.name);

    if (existingItem) {
      // Pokud položka existuje, změň její state
      const filter = { name: targetList.name };
      const update = {
        $set: {
          "items.$[elem].state": false,  // Změníme state u položky
        }
      };
      const options = {
        arrayFilters: [{ "elem.name": item.name }]  // Filtrujeme položku podle jejího jména
      };

      // Provádíme update na seznamu
      const result = await client.db("ShopList").collection("shopList").updateOne(filter, update, options);
      return result;
    } else {
      // Pokud položka neexistuje, přidáme ji do seznamu
      const filter = { name: targetList.name };
      const update = {
        $push: { items: item },  // Přidáme novou položku do seznamu
      };

      // Provádíme update seznamu
      const result = await client.db("ShopList").collection("shopList").updateOne(filter, update);
      return result;
    }
  } catch (err) {
    console.error(err);
    throw new Error("Chyba při aktualizaci seznamu");
  }
}






async function create(list)
{
  try {
    
    const resultCreate= await client.db("ShopList").collection("shopList").insertOne(list)
    console.log("Inserted document ID:", resultCreate.insertedId);
    
  } catch (err) {
    console.error("Error inserting document:", err);
  } 
}

module.exports = {
    display,
    create,
    update
}
    
