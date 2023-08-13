export const RatingFilter = ({ filterDispatch }) => {
  const ratings = Array(10)
    .fill()
    .map((ele, i) => i + 1);

  const handleRatingFilter = (e) => {
    filterDispatch({ type: "SET_RATING", payload: e.target.value });
  };
  return (
    <>
      <select name="rating" className="border" onChange={handleRatingFilter}>
        <option value="" selected disabled>
          Rating
        </option>
        <option value="All">All</option>
        {ratings.map((rating) => (
          <option key={rating} value={rating}>
            {rating}
          </option>
        ))}
      </select>
    </>
  );
};
