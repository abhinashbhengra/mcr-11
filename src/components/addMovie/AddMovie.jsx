export const AddMovie = () => {
  // attributes such as title, summary, year, cast, genre, rating, director, writer and imageURL
  return (
    <div className="flex justify-center items-center">
      <div>
        <h1 className="font-bold">Add New Movie</h1>
        <p>Title:</p>
        <input type="text" name="name" className="border" />
        <p>Summary:</p>
        <input type="text" name="description" className="border" />
        <p>Year:</p>
        <input type="text" name="price" className="border" />
        <p>Cast:</p>
        <input type="text" name="stock" className="border" />
        <p>Genre:</p>
        <input type="text" name="sku" className="border" />
        <p>Rating:</p>
        <input type="text" name="supplier" className="border" />
        <p>Director:</p>
        <input type="text" name="delivered" className="border" />
        <p>Writer:</p>
        <input type="text" name="delivered" className="border" />
        <p>Image URL:</p>
        <input type="text" name="imgURL" className="border block" />
        <button className="mt-2 bg-blue-500 p-2 text-white">Add Movie</button>
      </div>
    </div>
  );
};
