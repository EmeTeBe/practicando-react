import { useId } from "react";
import { useCart } from "../hooks/useCart.jsx";
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icon";
import "./Cart.css";

// cart item
export const CartItem = ({ image, price, title, quantity, addToCart }) => {
  return (
    <li>
      <img src={image} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <small>
          Qty: {quantity} - ${price * quantity}
        </small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
};

export const Cart = () => {
  const cartCheckboxId = useId();
  const { cart, removeFromCart, clearCart, addToCart } = useCart();
  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <div className="cart-content">
          <ul>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                addToCart={() => addToCart(item)}
                {...item}
              />
            ))}
          </ul>
        </div>
        <button className="clear-cart" onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
};
