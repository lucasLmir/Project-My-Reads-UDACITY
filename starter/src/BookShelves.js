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
        const oldShelfId = bookList.findIndex(s =>
            s.shelf === event.target.getAttribute('data-shelf'));
        const newShelf = event.target.value;
        const bookId = event.target.name;
        const newBookList = bookList

        const newShelfArray = bookList[oldShelfId].books.filter(s => s.id !== bookId)
        newBookList[oldShelfId].books = newShelfArray
        console.log(oldShelfId)
        console.log(newShelf)
        console.log(bookId)
        console.log(newShelfArray)
        setBookList(setBookList)


    }

    useEffect(() => {
        let unmounted = false;

        const getBooks = async () => {
            const res = await BooksAPI.getAll()
            if (!(res.hasOwnProperty('error')) || unmounted) {
                shelvesArray.map((s) => (
                    s.books.push(res.filter(book => book.shelf === s.shelf)
                    ))
                )
                shelvesArray.map((s) => {
                    s.books = s.books.flat(1)
                })
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