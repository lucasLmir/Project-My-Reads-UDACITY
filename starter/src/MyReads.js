import "./App.css";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";
import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";

const MyReads = () => {
    const [bookList, setBookList] = useState([]);

    useEffect(() => {
        const getBooks = async () => {
            const res = await BooksAPI.getAll()
            setBookList(res);
        };

        getBooks();
    }, []);

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                <BookShelf bookList={bookList} setBookList={setBookList} />
                </div>
            </div>
            <div className="open-search">
                <Link to="/searchpage" >Add a book</Link>
            </div>
        </div>
    );
};

export default MyReads;