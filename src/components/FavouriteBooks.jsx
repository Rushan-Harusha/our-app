import List from "./List";

function FavouriteBooks({ favouriteBooks, removeFavourite }) {
  return (
    <>
      <h2>Favourite Books</h2>
      <List
        items={favouriteBooks}
        emptyMessage="You have no favourite books yet"
        renderItem={(book) => (
          <div className="row">
            <div className="rowText">
              <strong>{book.title}</strong>
            </div>

            <button
              className="btn btnDanger"
              onClick={() => removeFavourite(book)}
            >
              Remove
            </button>
          </div>
        )}
      />
    </>
  );
}

export default FavouriteBooks;
