export const getFilteredData = (movies, filterState) => {
  const { genre, release, rating } = filterState;

  const filterByGenre = (movies, genre) => {
    if (genre === "All" || !genre) {
      return movies;
    }
    return movies.filter((prod) => prod.genre.includes(genre));
  };

  const filteredGenre = filterByGenre(movies, genre);

  const filterByRelease = (movies, release) => {
    if (!release) {
      return movies;
    }
    return movies.filter((prod) => prod.year === release);
  };

  const filteredRelease = filterByRelease(filteredGenre, release);

  const filterByRating = (movies, rating) => {
    if (!rating) {
      return movies;
    }
    return movies.filter((prod) => prod.rating === rating);
  };

  const filteredData = filterByRating(filteredRelease, rating);

  return filteredData;
};
