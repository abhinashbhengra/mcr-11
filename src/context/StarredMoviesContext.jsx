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

  const removeFromStarredMovies = (movieId) => {
    const updatedMovies = starredMovies.filter((movie) => movie.id !== movieId);
    setStarredMovies(updatedMovies);
  };
  return (
    <StarredMoviesContext.Provider
      value={{ starredMovies, addToStarredMovies, removeFromStarredMovies }}
    >
      {children}
    </StarredMoviesContext.Provider>
  );
};
