import Banner from './components/Banner';
import Cart from './components/Cart';
import Recommandation from './components/Recommandation';
import ShoppingList from './components/ShoppingList';
import './styles/App.css';

function App() {
  const mailUser = document.getElementById('mailUser');
  return (
    <div>
      <div className="lmj-header">
        <Banner />
      </div>
      <div className="lmj-recommandation">
        <Recommandation />
      </div>
      <div className="lmj-wrapper">
        <div className="lmj-30">
          <Cart />
        </div>
        <div className="lmj-70">
          <ShoppingList />
        </div>
      </div>
      <div className="lmj-footer">
        <footer className="lmj-footer-elem">
          Pour les passionné·e·s de plantes 🌿🌱🌵
        </footer>
        <footer className="lmj-footer-elem">
          Laissez-nous votre mail : <input id="mailUser"></input>
        </footer>
      </div>
    </div>
  );
}

export default App;
