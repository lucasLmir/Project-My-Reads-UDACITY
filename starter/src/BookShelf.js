import "./App.css";
import BookGrid from "./BookGrid";

const BookShelf = ({ BookShelfTitle }) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{BookShelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    <BookGrid />
                </ol>
            </div>
        </div>);
};

export default BookShelf;