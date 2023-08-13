import { createContext, useContext, useState } from "react";
import { ProductsContext } from "./ProductsContext";

export const StarredMoviesContext = createContext();

export const StarredMoviesProvider = ({ children }) => {
  const [starredMovies, setStarredMovies] = useState([]);
  const { allMovies } = useContext(ProductsContext);
  const addToStarredMovies = (movieId) => {
    const selectedMovie = allMovies.find((movie) => movie.id === movieId);
    setStarredMovies((curr) => [...curr, selectedMovie]);
  };
  return (
    <StarredMoviesContext.Provider
      value={{ starredMovies, addToStarredMovies }}
    >
      {children}
    </StarredMoviesContext.Provider>
  );
};
