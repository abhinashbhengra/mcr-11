import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext";

export const SingleCard = () => {
  const { allMovies } = useContext(ProductsContext);
  const { movieId } = useParams();

  const selectedMovie = allMovies.find((movie) => movie.id === +movieId);

  console.log("selected-movie", selectedMovie);
  return (
    <div className="p-9">
      <div className="flex justify-between shadow-lg">
        <div className="h-1/4">
          <img
            src={selectedMovie.imageURL}
            alt={selectedMovie.title}
            width={300}
          />
        </div>
        <div>
          <p>{selectedMovie.title}</p>
          <p>{selectedMovie.summary}</p>
          <p>Year : {selectedMovie.year}</p>
          <p>
            Genre :{" "}
            {selectedMovie.genre.map((g, i) =>
              i < selectedMovie.genre.length - 1 ? (
                <span key={i}>{` ${g}, `}</span>
              ) : (
                <span key={i}>{g}</span>
              )
            )}
          </p>
          <p>Rating : {selectedMovie.rating}</p>
          <p>Director : {selectedMovie.director}</p>
          <p>Writer : {selectedMovie.writer}</p>
          <p>
            Cast :{" "}
            {selectedMovie.cast.map((c, i) =>
              i < selectedMovie.cast.length - 1 ? (
                <span key={i}>{` ${c}, `}</span>
              ) : (
                <span key={i}>{c}</span>
              )
            )}
          </p>
          <div className="flex justify-between p-2 text-xs">
            <button className="mt-2 bg-zinc-800 px-2 py-1 text-white rounded-sm">
              Star
            </button>
            <button className="mt-2 bg-zinc-800 px-2 py-1 text-white rounded-sm">
              Add to WatchList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
