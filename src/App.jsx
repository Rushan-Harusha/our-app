import "./App.css";
import SearchBox from "./components/SearchBox";
import Books from "./components/Books";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <h1>Book Finder</h1>
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Books searchTerm={searchTerm} />
    </>
  );
}

export default App;
