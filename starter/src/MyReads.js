import "./App.css";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";
import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";

const MyReads = () => {
    const [bookList, setBookList] = useState([]);

    useEffect(() => {
        let unmounted = false;

        const getBooks = async () => {
                const res = await BooksAPI.getAll()
                if (!(res.hasOwnProperty('error'))|| unmounted) {
                    setBookList(res)
                } else {
                    setBookList([])
                }
        };

        getBooks();
        return () => {
            unmounted = true;
        };
    }, []);

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelf bookList={bookList} />
                </div>
            </div>
            <div className="open-search">
                <Link to="/searchpage" >Add a book</Link>
            </div>
        </div>
    );
};

export default MyReads;