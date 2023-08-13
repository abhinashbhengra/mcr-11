import { useContext } from "react";
import { WatchListContext } from "../../context/WatchListContext";
import { MovieCard } from "../../components/movieCard/MovieCard";

export const WatchListPage = () => {
  const { watchList } = useContext(WatchListContext);
  return (
    <>
      <h1>WishList page</h1>
      <div className="flex gap-9 flex-wrap mt-3">
        {watchList.length < 1 && <p className="font-bold">No movies found!!</p>}
        {watchList.map((movie, i) => (
          <MovieCard key={i} movie={movie} />
        ))}
      </div>
    </>
  );
};
