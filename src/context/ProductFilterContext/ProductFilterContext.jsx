import axios from "axios";
import { createContext, useEffect, useState } from "react";

const ProductFilterContext = createContext();

export function ProductFilterProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setAllProducts(res.data))
      .catch((err) => console.error("Failed to fetch products", err));
  }, []);

  return (
    <ProductFilterContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        sortOrder,
        setSortOrder,
        allProducts,
      }}
    >
      {children}
    </ProductFilterContext.Provider>
  );
}

export default ProductFilterContext;
