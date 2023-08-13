import { useContext } from "react";
import { GenreFilter } from "../filters-components/GenreFilter";
import { RatingFilter } from "../filters-components/RatingFilter";
import { ReleaseYearFilter } from "../filters-components/ReleaseYearFilter";
import { FilterContext } from "../../context/FilterContext";

export const AllFilter = () => {
  const { filterState, filterDispatch } = useContext(FilterContext);
  const { genre, release, rating } = filterState;
  return (
    <>
      <GenreFilter genre={genre} filterDispatch={filterDispatch} />
      <ReleaseYearFilter release={release} filterDispatch={filterDispatch} />
      <RatingFilter rating={rating} filterDispatch={filterDispatch} />
    </>
  );
};
