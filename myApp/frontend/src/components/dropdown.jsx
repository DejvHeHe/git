import '../App.css';
import React, { useState } from 'react';
import ItemComponent from './item';

function ShopDropdown({ name, items }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown-container">
      <button onClick={handleToggle}>
        {name} {isOpen ? '▼' : '►'}
      </button>

      {isOpen && (
        <div>
          {items.map((item, index) => (
            <ItemComponent key={index} name={item.name} count={item.count} state={item.state}/>
          ))}
        </div>
      )}
    </div>
  );
}

export default ShopDropdown;
