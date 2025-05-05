import './App.css';
import { useState, useEffect } from 'react';
import ShopDashboard from './components/dashboard';
import CreateForm from './components/createform';
import { fetchShopList } from './api';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState([]);

  const createList = () => {
    setShowForm(true); // show the form
  };

  async function loadData() {
    try {
      const shopData = await fetchShopList();
      setData(shopData);
    } catch (error) {
      console.error('Chyba při načítání dat:', error);
    }
  }

  // Load data when the component mounts
  useEffect(() => {
    loadData(); // Calls the loadData function on mount
  }, []); // Empty dependency array ensures it only runs once

  return (
    <div className="App">
      <header className="App-header">
        <h1>ShopList app</h1>
        <button onClick={createList}>Vytvořit nakupní seznam</button>
      </header>

      {showForm && (
        <CreateForm
          text="Zadejte název nakupního seznamu:"
          onClose={() => setShowForm(false)}
          loadData={loadData}  // Passing loadData to CreateForm
        />
      )}

      {/* Pass data to ShopDashboard */}
      <ShopDashboard data={data} loadData={loadData} />
    </div>
  );
}

export default App;
