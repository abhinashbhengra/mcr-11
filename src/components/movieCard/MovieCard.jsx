import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { WatchListContext } from "../../context/WatchListContext";
import { StarredMoviesContext } from "../../context/StarredMoviesContext";

export const MovieCard = ({ movie }) => {
  const { id, imageURL, title, summary } = movie;
  const { watchList, addToWatchList, removeFromWatchList } =
    useContext(WatchListContext);
  const { starredMovies, addToStarredMovies, removeFromStarredMovies } =
    useContext(StarredMoviesContext);

  const navigate = useNavigate();

  const findMovie = (movieId) => {
    return watchList.find((list) => list.id === movieId);
  };

  const findFromStarred = (movieId) => {
    return starredMovies.find((list) => list.id === movieId);
  };

  console.log(starredMovies);
  return (
    <>
      <main className="shadow-lg w-48 text-center">
        <div
          className="h-3/5 overflow-hidden cursor-pointer"
          onClick={() => navigate(`/movie/${id}`)}
        >
          <img src={imageURL} alt={title} className="w-full h-full" />
        </div>
        <div className="h-44 flex flex-col justify-between">
          <p className="text-xl font-bold">{title}</p>
          <p className="text-xs"> {summary}</p>
          <div className="flex justify-between p-2 text-xs">
            {findFromStarred(id) ? (
              <button
                className="mt-2 bg-zinc-800 px-2 py-1 text-white rounded-sm"
                onClick={() => removeFromStarredMovies(id)}
              >
                Starred
              </button>
            ) : (
              <button
                className="mt-2 bg-zinc-800 px-2 py-1 text-white rounded-sm"
                onClick={() => addToStarredMovies(id)}
              >
                Star
              </button>
            )}
            {/* jhhh */}
            {findMovie(id) ? (
              <button
                className="mt-2 bg-zinc-800 px-2 py-1 text-white rounded-sm"
                onClick={() => removeFromWatchList(id)}
              >
                Remove WatchList
              </button>
            ) : (
              <button
                className="mt-2 bg-zinc-800 px-2 py-1 text-white rounded-sm"
                onClick={() => addToWatchList(id)}
              >
                Add to WatchList
              </button>
            )}
          </div>
        </div>
      </main>
    </>
  );
};
