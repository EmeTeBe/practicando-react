import { useId } from "react";
import { useFilters } from "../hooks/useFilters.jsx";
import "./Filters.css";

export const Filters = () => {
  const { filters, setFilters } = useFilters();
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangePrice = (event) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Precio</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          step="10"
          onChange={handleChangePrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select onChange={handleChangeCategory} id={categoryFilterId}>
          <option value="all">Todas</option>
          <option value="men's clothing">Ropa</option>
          <option value="electronics">Electrónica</option>
          <option value="jewelery">Joyerías</option>
        </select>
      </div>
    </section>
  );
};
