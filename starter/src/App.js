import "./App.css";
import MyReads from "./MyReads";
import SearchPage from "./SearchPage";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="app">
      <Routes>
        <Route
          exact path="/" element={
            <MyReads />
          }
        />
        <Route
          path="/searchpage"
          element={
            <SearchPage />
          }
        />
      </Routes>
    </div>
  );
}

export default App;