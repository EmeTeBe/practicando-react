import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icon.jsx";
import { useCart } from "../hooks/useCart.jsx";

export function Products({ products }) {
  const { addToCart, cart, removeFromCart } = useCart();

  const checkIfProductIsInCart = (productToCheck) => {
    return cart.some((item) => item.id === productToCheck.id);
  };

  return (
    <main className="products">
      <ul>
        {products.slice(0, 12).map((item) => {
          const isInCart = checkIfProductIsInCart(item);
          return (
            <li key={item.id}>
              <img src={item.image} alt={item.title} />
              <div>
                <strong>{item.title}</strong> - ${item.price}
              </div>
              <div className="product-buttons">
                <button
                  style={{ backgroundColor: isInCart ? "red" : "#09f" }}
                  onClick={() =>
                    isInCart ? removeFromCart(item) : addToCart(item)
                  }
                >
                  {isInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
