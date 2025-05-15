import { createContext, useState } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (productToAdd) => {
    // Check if the product is already in the cart
    const productInCart = cart.findIndex((item) => item.id === productToAdd.id);
    if (productInCart >= 0) {
      // If the product is already in the cart, update its quantity
      const updatedCart = [...cart];
      updatedCart[productInCart].quantity += 1;
      return setCart(updatedCart);
    }
    // If the product is not in the cart
    setCart((prev) => [...prev, { ...productToAdd, quantity: 1 }]);
  };

  const removeFromCart = (productToRemove) => {
    setCart((prev) => prev.filter((item) => item.id !== productToRemove.id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        addToCart,
        removeFromCart,
        clearCart,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
