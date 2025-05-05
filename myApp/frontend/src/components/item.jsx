import React, { useState, useEffect } from 'react';
import '../App.css';

import { uncheck } from '../api';

function Item({ name, count, state, shopList, loadData}) {
  const [isChecked, setChecked] = useState(state); // whether it's marked
  const [isDisabled, setDisabled] = useState(!state); // disabled if already done

  useEffect(() => {
    setChecked(state);
    setDisabled(!state);
  }, [state]);

  const handleChange = async () => {
    try {
      // Optimistically disable immediately
      
      await uncheck({name,shopList})    
      

      // Re-fetch data from server
      await loadData();
    } catch (error) {
      console.error('Chyba při aktualizaci položky:', error);
      
    }
  };

  return (
    <div className="dropdown-item">
      <label>
        <input
          type="checkbox"
          checked={!isChecked}
          onChange={handleChange}
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
