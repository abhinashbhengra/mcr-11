import { Routes, Route } from "react-router-dom";
import { MovieListingPage } from "./pages/movie-listing/MovieListing";
import { WatchListPage } from "./pages/watchList/WatchList";
import { StarredMovies } from "./pages/starredMovie/StarredMovie";
import { Navbar } from "./components/navbar/Navbar";
import { SingleCard } from "./components/singleCard/SingleCard";
import { AddMovie } from "./components/addMovie/AddMovie";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieListingPage />} />
        <Route path="/watchlist" element={<WatchListPage />} />
        <Route path="/starred" element={<StarredMovies />} />
        <Route path="/movie/:movieId" element={<SingleCard />} />
        <Route path="/movie/add-movie" element={<AddMovie />} />
      </Routes>
    </div>
  );
}

export default App;
