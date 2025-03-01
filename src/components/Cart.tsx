import "../styles/Cart.css";
import useCartStore from "../store/cartStores";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const {
    cartProducts,
    increaseProductQuantity,
    decreaseProductQuantity,
    removeProduct,
    totalPrice
  } = useCartStore();

  return (
    <div className="cart">
      <div className="cart-header">
        <FaShoppingCart />
        <h2>Carrinho de Compras</h2>
      </div>
      <div className="cart-grid">
        {cartProducts.length === 0 ? (
          <p>O carrinho está vazio.</p>
        ) : (
          cartProducts.map((item) => (
            <div key={item.id} className="cart-card">
              <p>{item.description}</p>
              <p>R$ {item.price.toFixed(2)}</p>
              <p>Quantidade: {item.quantity}</p>
              <button onClick={() => increaseProductQuantity(item)}>+</button>
              <button onClick={() => decreaseProductQuantity(item)}>-</button>
              <button onClick={() => removeProduct(item)}>Remover</button>
            </div>
          ))
        )}
      </div>
      <h3 className="cart-total">Total: R$ {totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;

