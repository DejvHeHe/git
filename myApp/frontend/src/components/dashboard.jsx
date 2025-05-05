import '../App.css';
import React, { useEffect, useState } from 'react';
import ShopDropdown from './dropdown';

function Dashboard({ loadData, data }) {
  // Since data is passed as a prop, you don't need to load it inside Dashboard again.
  // You just need to render it.

  return (
    <div className='dashboard'>
      {data.length > 0 ? (
        data.map((shop, index) => (
          <ShopDropdown
            key={index}
            name={shop.name || 'Neznámý'}
            items={shop.items || []}
            loadData={loadData}
          />
        ))
      ) : (
        <p>No shops available</p>
      )}
    </div>
  );
}

export default Dashboard;
