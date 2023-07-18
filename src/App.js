import Banner from './components/Banner';
import Cart from './components/Cart';
import ShoppingList from './components/ShoppingList';
import './styles/App.css';

function App() {
  return (
    <div>
      <div className="lmj-header">
        <Banner />
      </div>
      <div className="lmj-wrapper">
        <div className="lmj-30">
          <Cart />
        </div>
        <div className="lmj-70">
          <ShoppingList />
        </div>
      </div>
    </div>
  );
}

export default App;
