import '../App.css';
import { fetchShopList } from '../api';
import React, { useEffect, useState } from 'react';
import ShopDropdown from './dropdown';


function Dashboard() {

  const [data, setData] = useState([]);
  async function loadData() {
    try {
      const shopData = await fetchShopList();
      setData(shopData);
    } catch (error) {
      console.error('Chyba při načítání dat:', error);
    }
  }

  useEffect(() => {   

    loadData();
  }, []);

  return (
    <div className='dashboard'>
      {data.map((shop, index) => (
        <ShopDropdown name={shop.name || 'Neznámý'} items={shop.items || []} loadData={loadData} />

      ))}
    </div>
  );
}

export default Dashboard;

