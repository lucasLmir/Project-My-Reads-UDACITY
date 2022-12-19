import "./App.css";
import SearchPage from "./SearchPage";
import { Route, Routes } from "react-router-dom";
import BookShelves from "./BookShelves";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";

function App() {
  const [bookList, setBookList] = useState([]);

  const getBooks = async () => {
    const res = await BooksAPI.getAll()
    if (!(res.hasOwnProperty('error'))) {
      setBookList(res);
    } else {
      setBookList([])
    }
  };

  useEffect(() => {
    let unmounted = false;
    
    !unmounted && getBooks();
    return () => {
      unmounted = true;
    };
  }, []);

  const HandleChange = (event) => {
    const shelf = event.target.value;
    const bookId = event.target.name;

    /*
    const oldShelfId = bookList.findIndex(s =>
      s.shelf === event.target.getAttribute('data-shelf'));
    const newShelfId = bookList.findIndex(s =>
      s.shelf === event.target.value);
    
    const book = bookList[oldShelfId].books.filter(b => b.id === bookId);
    const stageBookList = bookList

    if (oldShelfId !== -1) {
      const oldShelfArray = bookList[oldShelfId].books.filter(s => s.id !== bookId);
      stageBookList[oldShelfId].books = oldShelfArray
    }

    if (newShelfId !== -1) {
      const newShelfArray = stageBookList[newShelfId].books
      newShelfArray.push(book[0])
      stageBookList[newShelfId].books = newShelfArray
    }
    */
    

    const updateBook = async () => {
      await BooksAPI.update({ id: bookId }, shelf);
      const book = await BooksAPI.get(bookId)
      book.shelf = shelf;
      setBookList(bookList.filter(b => b.id !== bookId).concat(book));
    };

    updateBook();
  }


  const [query, setQuery] = useState("");

  const updateQuery = (query) => {
      setQuery(query.trim());
      query !== "" ? searchBook(query, 5) : setBookList([]);
  };

  const resetBookList = () => {
    setBookList([])
  };

  const searchBook = async (query, maxResults) => {
      const res = await BooksAPI.search(query, maxResults);
      if (!(res.hasOwnProperty('error'))) {
          setBookList(res)
      } else {
          setBookList([])
      }
  };


  return (
    <div className="app">
      <Routes>
        <Route
          exact path="/" element={
            <BookShelves
            bookList={bookList}
            onChange={HandleChange}
            resetBookList={resetBookList}
            />
          }
        />
        <Route
          path="/searchpage"
          element={
            <SearchPage
              bookList={bookList}
              onChange={HandleChange}
              updateQuery={updateQuery}
              query={query}
              getBooks={getBooks}

            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;