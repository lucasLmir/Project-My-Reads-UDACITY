import "./App.css";
import Book from "./Book";

const BookGrid = ({ bookList }) => {
    const books = bookList.map((b) => (
        <Book
            BackgroundImage={b.imageLinks.thumbnail}
            BookTitle={b.title}
            BookAuthors={b.authors}
        />
    ));

    return (
        <ol className="books-grid">
            {books}
        </ol>
    );
};

export default BookGrid;