import "./App.css";
import { Link } from "react-router-dom";
import BookGrid from "./BookGrid";


const BookShelves = ({ bookList, onChange, resetBookList }) => {


    const shelvesArray = [
        {
            shelf: "currentlyReading",
            title: "Currently Reading"
        },
        {
            shelf: "wantToRead",
            title: "Want to Read"
        },
        {
            shelf: "read",
            title: "Read"
        },
    ];

    const shelves = shelvesArray.map((s) => (
        <div key={s.shelf} className="bookshelf">
            <h2 className="bookshelf-title">{s.title}</h2>
            <div className="bookshelf-books">
                {<BookGrid
                    bookList={bookList.filter(b => b.shelf === s.shelf)}
                    onChange={onChange}
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
                <Link to="/searchpage" onClick={resetBookList} >Add a book</Link>
            </div>
        </div>
    );
};

export default BookShelves;