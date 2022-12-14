import "./App.css";
import MyReads from "./MyReads";
import SearchPage from "./SearchPage";
import { Route, Routes } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import { useState, useEffect } from "react";

function App() {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
      const getBooks = async () => {
          const res = await BooksAPI.getAll()
          setBookList(res);
      };

      getBooks();
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route
          exact path="/" element={
            <MyReads bookList={bookList} />
          }
        />
        <Route
          path="/searchpage"
          element={
            <SearchPage bookList={bookList} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;