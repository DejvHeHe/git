import '../App.css';
import React, { useEffect, useState } from 'react';
import ShopDropdown from './dropdown';

function Dashboard({ loadData, data }) {
  

  return (
    <div className='dashboard'>
      {data.length > 0 ? (
        data.map((shop, index) => (
          <ShopDropdown
            key={index}
            name={shop.name || 'Neznámý'}
            ID={shop._id}
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
