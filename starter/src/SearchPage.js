import { Link } from "react-router-dom";
import BookGrid from "./BookGrid";

const SearchPage = ({ bookList, onChange, query, updateQuery, getBooks }) => {

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link
                    onClick={getBooks}
                    className="close-search"
                    to="/"
                >
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        value={query}
                        onChange={(event) => updateQuery(event.target.value)}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <BookGrid
                    bookList={bookList}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};

export default SearchPage;