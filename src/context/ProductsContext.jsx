import { createContext, useEffect, useState } from "react";
import { movies } from "../api/data";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [allMovies, setAllMoives] = useState([]);

  useEffect(() => {
    setAllMoives(movies);
  }, []);

  return (
    <ProductsContext.Provider value={{ allMovies }}>
      {children}
    </ProductsContext.Provider>
  );
};
