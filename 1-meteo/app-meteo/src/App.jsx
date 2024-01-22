import { useEffect, useState } from "react";
import Home from "./components/Home";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState("");
  let clicked = false;

  useEffect(() => console.log(searched));

  const handleSearch = () => {
    if (search.length > 0) {
      
      setSearched(search);
      clicked = true;
    }
  };

  return (
    <>
      <div className="container">
        <div className="topSearch">
          <input
            className="input"
            type="text"
            name="search"
            placeholder="Search city"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="button" onClick={() => handleSearch()}>
            Cerca
          </button>
        </div>

        <Home search={searched} />
      </div>
    </>
  );
}

export default App;
