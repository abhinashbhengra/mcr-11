export const ReleaseYearFilter = ({ filterDispatch }) => {
  const year = new Date().getFullYear();

  const handleReleaseFilter = (e) => {
    filterDispatch({ type: "SET_RELEASE", payload: e.target.value });
  };

  return (
    <>
      <select name="years" className="border" onChange={handleReleaseFilter}>
        <option value="" selected disabled>
          Release Year
        </option>
        <option value="All">All</option>
        {Array.from(new Array(34), (v, i) => (
          <option key={i} value={year - i}>
            {year - i}
          </option>
        ))}
      </select>
    </>
  );
};
