import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-2 bg-zinc-800">
      <h1 className="text-white font-bold">
        <Link to="/">IMDB</Link>
      </h1>
      <div>
        <input
          type="text"
          name="search"
          placeholder="Search movie by title, cast or director."
          className="border p-1 text-xs w-60"
        />
      </div>
      <div className="flex gap-2 text-white text-sm">
        <Link to="/">Movies</Link>
        <Link to="watchlist">Watch List</Link>
        <Link to="starred">Starred Movies</Link>
      </div>
    </div>
  );
};
