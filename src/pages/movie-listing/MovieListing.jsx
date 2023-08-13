import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { FilterContext } from "../../context/FilterContext";
import { getFilteredData } from "../../utils/getFilteredData";
import { MovieCard } from "../../components/movieCard/MovieCard";
import { AllFilter } from "../../components/allFilters/AllFilters";
import { Link } from "react-router-dom";

export const MovieListingPage = () => {
  const { allMovies } = useContext(ProductsContext);
  const { filterState } = useContext(FilterContext);

  const filteredMovies = getFilteredData(allMovies, filterState);

  // console.log("movieList", filteredMovies);
  return (
    <div className="p-12">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Movies</h1>
        <AllFilter />
        <Link
          to="/movie/add-movie"
          className="mt-2 bg-zinc-800 px-2 py-1 text-white rounded-sm"
        >
          Add a movie
        </Link>
      </div>

      <div className="flex gap-9 flex-wrap mt-3">
        {filteredMovies.length < 1 && (
          <p className="font-bold">No movies found!!</p>
        )}
        {filteredMovies.map((movie, i) => (
          <MovieCard key={i} movie={movie} />
        ))}
      </div>
    </div>
  );
};
