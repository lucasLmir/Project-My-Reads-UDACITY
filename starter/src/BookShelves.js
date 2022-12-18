import "./App.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import BookGrid from "./BookGrid";
import * as BooksAPI from "./BooksAPI";

const BookShelves = () => {
    const [bookList, setBookList] = useState([]);

    const shelvesArray = useMemo(() => (
        [
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
        ]
    ), []);

    const HandleChange = (event) => {
        const shelf = event.target.value;
        const oldShelfId = bookList.findIndex(s =>
            s.shelf === event.target.getAttribute('data-shelf'));
        const newShelfId = bookList.findIndex(s =>
            s.shelf === event.target.value);
        const bookId = event.target.name;
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

        const updateBook = async () => {
            await BooksAPI.update(bookId, shelf);
            console.log(shelf)
        };

        updateBook();
        setBookList(setBookList);
    }

    useEffect(() => {
        let unmounted = false;

        const getBooks = async () => {
            const res = await BooksAPI.getAll()
            if (!(res.hasOwnProperty('error')) || unmounted) {
                shelvesArray.map((s) => (
                    s.books.push(res.filter(book => book.shelf === s.shelf)
                    ))
                );

                shelvesArray.map((s) => (
                    s.books = s.books.flat(1)
                ));

                setBookList(shelvesArray);
            } else {
                setBookList([])
            }
        };
        getBooks();
        return () => {
            unmounted = true;
        };
    }, [shelvesArray]);

    const shelves = bookList?.map((s) => (
        <div key={s.shelf} className="bookshelf">
            <h2 className="bookshelf-title">{s.title}</h2>
            <div className="bookshelf-books">
                {<BookGrid
                    bookList={s.books}
                    shelf={s.shelf}
                    onChange={HandleChange}
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