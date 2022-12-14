import "./App.css";
import BookGrid from "./BookGrid";

const BookShelf = ({ bookList }) => {
    const shelfs = [
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

    const shelf = shelfs.map((shelf) => (
        <div key={shelf.shelf} className="bookshelf">
            <h2 className="bookshelf-title">{shelf.title}</h2>
            <div className="bookshelf-books">
                    {<BookGrid
                        bookList = {bookList.filter(book => book.shelf === shelf.shelf)}
                        shelf={shelf.shelf}
                    />}
            </div>
        </div>)
    )


    return (
        <div>{shelf}</div>
    );
};

export default BookShelf;