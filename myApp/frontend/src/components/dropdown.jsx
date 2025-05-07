import '../App.css';
import React, { useState } from 'react';
import ItemComponent from './item';
import AddForm from './addform'; 

function ShopDropdown({ name, items, loadData, data }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  const [showForm, setShowForm] = useState(false);

  const handleAddForm = () => {
    setShowForm(true);
  }

  return (
    <div className="dropdown-container">
      <button onClick={handleToggle} className="dropdown-toggle">
        <span>{name}</span>
        <span className="arrow">{isOpen ? '▼' : '►'}</span>
        <button onClick={handleAddForm}>Přidat položku</button>
      </button>

      {isOpen && (
        <div>
          {items.map((item, index) => (
            <ItemComponent
              key={index}
              name={item.name}
              count={item.count}
              state={item.state}
              shopList={item.shopList}
              loadData={loadData}
            />
          ))}
        </div>
      )}
      {showForm && (
        <div>
          <AddForm 
            loadData={loadData}
            onClose={() => setShowForm(false)}
            shopList={name}
            
          />
        </div>
      )}
    </div>
  );
}

export default ShopDropdown;