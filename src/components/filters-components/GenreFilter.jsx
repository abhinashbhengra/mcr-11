import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";

export const GenreFilter = ({ genre, filterDispatch }) => {
  const { allMovies } = useContext(ProductsContext);

  let tempGenre = [];
  const allGenre = allMovies.map((movie) =>
    movie.genre.map((genre) => tempGenre.push(genre))
  );
  const uniqueGenre = Array.from(new Set(tempGenre));

  const handleGenreFilter = (e) => {
    filterDispatch({ type: "SET_GENRE", payload: e.target.value });
  };

  return (
    <>
      <select name="genre" className="border" onChange={handleGenreFilter}>
        <option value="All">All Genre</option>
        {uniqueGenre.map((g) => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </select>
    </>
  );
};
