import "./App.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BookGrid from "./BookGrid";
import * as BooksAPI from "./BooksAPI";

const BookShelves = () => {
    const [bookList, setBookList] = useState([]);

    const shelvesArray = [
        {
            shelf: "currentlyReading",
            title: "Currently Reading",
            books: []
        },
        {
            shelf: "wantToRead",
            title: "Want to Read",
            books: []
        },
        {
            shelf: "read",
            title: "Read",
            books: []
        },
    ];

    useEffect(() => {
        let unmounted = false;

        const getBooks = async () => {
            const res = await BooksAPI.getAll()
            if (!(res.hasOwnProperty('error')) || unmounted) {
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

    const shelves = shelvesArray.map((s) => (
        <div key={s.shelf} className="bookshelf">
            <h2 className="bookshelf-title">{s.title}</h2>
            <div className="bookshelf-books">
                {<BookGrid
                    bookList={bookList.filter(book => book.shelf === s.shelf)}
                    shelf={s.shelf}
                />}
            </div>
        </div>)
    )

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {shelves}
                </div>
            </div>
            <div className="open-search">
                <Link to="/searchpage" >Add a book</Link>
            </div>
        </div>
    );
};

export default BookShelves;