import React, { useState, useEffect } from "react";
import { fetchItem } from "../api";
import { addItem } from "../api";

function AddForm({ loadData, onClose, shopList }) {
  const [itemName, setName] = useState("");
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  /*
  try
  {
      let data={
          
          shopList:{shopList}
         
      }
          

  }
      
  catch(error)
  {
      console.error("Error submitting data:", error);
  }
      */
  async function loadItems() {
    try {
      const fetchedItems = await fetchItem(); // Corrected variable name to avoid shadowing
      setItems(fetchedItems); // Corrected variable name to match fetched data
      console.log(items);

    } catch (error) {
      console.log("Problem with fetching items", error);
    }
  }

  useEffect(() => {
    loadItems();
  }, []);
  const itemNames = items.map((item) => item.name);

  

  return (
    <div className='modalwindow'>
      <form> 
        <p>Vyber položku co chceš přidat:</p>
        <select value={itemName} onChange={(e) => setName(e.target.value)}>
          <option value="">Vyberte položku</option> {/* Added a default "Select" option */}
          {itemNames.map((name, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </select>
        <p>Počet:</p>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value))} // Ensure count is parsed as an integer
        ></input>
        <button type="submit">Potvrdit</button> {/* Changed to type="submit" to trigger handleSubmit */}
        <button type="button" onClick={onClose}>Zavřít</button> {/* Changed to type="button" for the close button */}
      </form>
    </div>
  );
}
export default AddForm;