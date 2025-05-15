import "./Products.css";
import { AddToCartIcon } from "./Icon.jsx";

export function Products({ products }) {
  return (
    <main className="products">
      <ul>
        {products.slice(0, 12).map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <div>
              <strong>{product.title}</strong> - ${product.price}
            </div>
            <div>
              <button>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
