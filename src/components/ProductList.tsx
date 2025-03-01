import "../styles/ProductList.css";
import { products } from "../data/products";
import useCartStore from "../store/cartStores";
import { GiBearFace } from "react-icons/gi";

const ProductList = () => {
  const addProduct = useCartStore((state) => state.addProduct);

  return (
    <div className="product-list">
      <h2>Produtos</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card">
            <img src={product.image} alt={product.description} className="product-image" />
            <p>{product.description}</p>
            <p>R$ {product.price.toFixed(2)}</p>
            <button
              onClick={() => addProduct(product)}
              className="product-add-button"
            >
              <GiBearFace />
              Adicionar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

