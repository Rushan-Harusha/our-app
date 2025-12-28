import "./App.css";
import { useState } from "react";
import SearchBox from "./components/SearchBox";
import Books from "./components/Books";
import FavouriteBooks from "./components/FavouriteBooks";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [favouriteBooks, setFavouriteBooks] = useState([]);

  const addFavourite = (book) => {
    if (!favouriteBooks.some((b) => b.title === book.title)) {
      setFavouriteBooks([...favouriteBooks, book]);
    }
  };

  const removeFavourite = (book) => {
    setFavouriteBooks(favouriteBooks.filter((b) => b.title !== book.title));
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Book Finder</h1>
        <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </header>

      <main className="grid">
        <section className="panel">
          <Books searchTerm={searchTerm} onFavourite={addFavourite} />
        </section>

        <section className="panel">
          <FavouriteBooks
            favouriteBooks={favouriteBooks}
            removeFavourite={removeFavourite}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
