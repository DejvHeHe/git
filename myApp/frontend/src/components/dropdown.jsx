import '../App.css';
import React, { useState } from 'react';

function ShopDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown-container">
      <button onClick={handleToggle}>
        {isOpen ? 'ShopList ▼' : 'ShopList ►'}
      </button>

      {isOpen && (
        <div className="dropdown-list">
          <div className="dropdown-item">Milk</div>
          <div className="dropdown-item">Bread</div>
          <div className="dropdown-item">Eggs</div>
        </div>
      )}
    </div>
  );
}

export default ShopDropdown;
