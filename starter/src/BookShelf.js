import "./App.css";
import BookGrid from "./BookGrid";

const BookShelf = () => {
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

    return (
        shelfs.map((shelf) => (
            <div key={shelf.shelf} className="bookshelf">
                <h2 className="bookshelf-title">{shelf.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <BookGrid />
                    </ol>
                </div>
            </div>)
        )
    );
};

export default BookShelf;