import { useContext, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

export const AddMovie = () => {
  // attributes such as title, summary, year, cast, genre, rating, director, writer and imageURL
  const [movieDetails, setMovieDetails] = useState({
    title: "",
    summary: "",
    year: null,
    cast: "",
    genre: "",
    rating: null,
    director: "",
    writer: "",
    imageURL: "",
  });

  const { allMovies, setAllMoives } = useContext(ProductsContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const newMovie = {
      id: uuid(),
      title: movieDetails.title,
      summary: movieDetails.summary,
      year: +movieDetails.year,
      cast: [movieDetails.cast],
      genre: [movieDetails.genre],
      rating: +movieDetails.rating,
      director: movieDetails.director,
      writer: movieDetails.director,
      imageURL: movieDetails.imageURL,
    };

    setAllMoives((curr) => [...curr, newMovie]);
    setMovieDetails({
      title: "",
      summary: "",
      year: null,
      cast: "",
      genre: "",
      rating: null,
      director: "",
      writer: "",
      imageURL: "",
    });
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center">
      <div>
        <h1 className="font-bold">Add New Movie</h1>
        <p>Title:</p>
        <input
          type="text"
          id="name"
          value={movieDetails.title}
          onChange={(e) =>
            setMovieDetails((curr) => ({ ...curr, title: e.target.value }))
          }
          className="border"
        />
        <p>Summary:</p>
        <input
          type="text"
          id="summary"
          name="summary"
          value={movieDetails.summary}
          onChange={(e) =>
            setMovieDetails((curr) => ({ ...curr, summary: e.target.value }))
          }
          className="border"
        />
        <p>Year:</p>
        <input
          type="number"
          id="year"
          name="year"
          value={movieDetails.year}
          onChange={(e) =>
            setMovieDetails((curr) => ({ ...curr, year: e.target.value }))
          }
          className="border"
        />
        <p>Cast:</p>
        <input
          type="text"
          id="cast"
          name="cast"
          value={movieDetails.cast}
          onChange={(e) =>
            setMovieDetails((curr) => ({
              ...curr,
              cast: e.target.value,
            }))
          }
          className="border"
        />
        <p>Genre:</p>
        <input
          type="text"
          name="genre"
          id="genre"
          value={movieDetails.genre}
          onChange={(e) =>
            setMovieDetails((curr) => ({
              ...curr,
              genre: e.target.value,
            }))
          }
          className="border"
        />
        <p>Rating:</p>
        <input
          type="number"
          name="rating"
          id="rating"
          value={movieDetails.rating}
          onChange={(e) =>
            setMovieDetails((curr) => ({
              ...curr,
              rating: e.target.value,
            }))
          }
          className="border"
        />
        <p>Director:</p>
        <input
          type="text"
          name="director"
          id="director"
          value={movieDetails.director}
          onChange={(e) =>
            setMovieDetails((curr) => ({
              ...curr,
              director: e.target.value,
            }))
          }
          className="border"
        />
        <p>Writer:</p>
        <input
          type="text"
          name="writer"
          id="writer"
          value={movieDetails.writer}
          onChange={(e) =>
            setMovieDetails((curr) => ({
              ...curr,
              writer: e.target.value,
            }))
          }
          className="border"
        />
        <p>Image URL:</p>
        <input
          type="text"
          name="imageURL"
          id="imageURL"
          onChange={(e) =>
            setMovieDetails((curr) => ({
              ...curr,
              imageURL: e.target.value,
            }))
          }
          className="border block"
        />
        <button
          className="mt-2 bg-blue-500 p-2 text-white"
          onClick={handleSubmit}
        >
          Add Movie
        </button>
      </div>
    </div>
  );
};
