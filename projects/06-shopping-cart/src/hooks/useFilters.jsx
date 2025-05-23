import { useContext } from "react";
import { FiltersContext } from "../context/filters.jsx";

export const useFilters = () => {
  const { filters, setFilters } = useContext(FiltersContext);

  const filterProducts = (products) => {
    return products.filter((product) => {
      console.log(product.category);
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };
  return { filters, setFilters, filterProducts };
};
