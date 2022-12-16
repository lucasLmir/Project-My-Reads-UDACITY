import "./App.css";
import SearchPage from "./SearchPage";
import { Route, Routes } from "react-router-dom";
import BookShelves from "./BookShelves";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          exact path="/" element={
            <BookShelves />
          }
        />
        <Route
          path="/searchpage"
          element={
            <SearchPage/>
          }
        />
      </Routes>
    </div>
  );
}

export default App;