import './App.css';
import ShopDashboard from './components/dashboard';
import CreateForm from './components/createform';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ShopList app</h1>
        <button className='primaryButton'onClick="createList()">Vytvořit nakupní seznam</button>
      </header>
        <ShopDashboard />
      
    </div>
  );
}

export default App;
