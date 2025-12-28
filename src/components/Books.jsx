import { useEffect, useState } from "react";
import List from "./List";

function Books({ searchTerm, onFavourite }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}books.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch books.json");
        return res.json();
      })
      .then((data) => {
        setBooks(data.books);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>Error: {error}</p>;

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h2>Book List</h2>

      <List
        items={filteredBooks}
        renderItem={(book) => (
          <div className="row">
            <div className="rowText">
              <strong>{book.title}</strong>
              <span className="muted"> by {book.author}</span>
            </div>

            <button className="btn" onClick={() => onFavourite(book)}>
              Add to favourite
            </button>
          </div>
        )}
      />
    </>
  );
}

export default Books;
