import { createContext, useContext, useState } from "react";
import { ProductsContext } from "./ProductsContext";

export const WatchListContext = createContext();

export const WatchListProvider = ({ children }) => {
  const [watchList, setWatchList] = useState([]);
  const { allMovies } = useContext(ProductsContext);
  const addToWatchList = (movieId) => {
    const selectedMovie = allMovies.find((movie) => movie.id === movieId);
    setWatchList((curr) => [...curr, selectedMovie]);
  };

  const removeFromWatchList = (movieId) => {
    const filteredMovies = watchList.filter((movie) => movie.id !== movieId);
    setWatchList(filteredMovies);
  };
  return (
    <WatchListContext.Provider
      value={{ watchList, addToWatchList, removeFromWatchList }}
    >
      {children}
    </WatchListContext.Provider>
  );
};
