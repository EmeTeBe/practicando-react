import { products as initialProducts } from "./mocks/products.json";
import { Products } from "./components/Products.jsx";
import { Header } from "./components/Header.jsx";
import { useFilters } from "./hooks/useFilters.jsx";
import { Cart } from "./components/Cart.jsx";
import { CartProvider } from "./context/cart.jsx";

function App() {
  const { filters, filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProducts);
  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
    </CartProvider>
  );
}

export default App;
