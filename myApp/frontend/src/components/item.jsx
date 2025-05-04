import React, { useState, useEffect } from 'react';
import '../App.css';

function Item({ name, count, state,shopList}) {
  const [isChecked, setCheck] = useState(false);
  const [isDisabled, setDisable]= useState(false)

  useEffect(() => {
    setCheck(state); // ensures it's a boolean
    setDisable(!state)
  }, [state]);

  return (
    <div className="dropdown-item">
      <label>
        <input
          type="checkbox"
          checked={!isChecked}
          onChange={() => {
            setCheck(!isChecked);
            setDisable(!isDisabled);
            console.log({name,shopList})
            fetch('http://localhost:5000/item/uncheck', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },              
              body: JSON.stringify({ name, shopList })
            });
            
          }}
          
          disabled={isDisabled}
          className="custom-checkbox"
        />
        <span className={state ? 'normal-text' : 'crossed-out'}>
          {name} | Počet: {count || "1"}
        </span>

      </label>
    </div>
  );
}

export default Item;
