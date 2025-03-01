import "./global.css";
import "./styles/App.css";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="app-container">
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
