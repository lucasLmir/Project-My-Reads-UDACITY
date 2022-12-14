import { Link } from "react-router-dom";
import BookGrid from "./BookGrid";
import { useState } from "react";
import * as BooksAPI from "./BooksAPI";

const SearchPage = () => {
    const [bookList, setBookList] = useState([]);
    const [query, setQuery] = useState("");

    const updateQuery = (query) => {
        setQuery(query.trim());
        query !== "" ? searchBook(query, 5) : setBookList([]);

    };

    const searchBook = async (query, maxResults) => {
        const res = await BooksAPI.search(query, maxResults);
        setBookList(res);
    };

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link
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
                <BookGrid bookList={bookList} />
            </div>
        </div>
    );
};

export default SearchPage;