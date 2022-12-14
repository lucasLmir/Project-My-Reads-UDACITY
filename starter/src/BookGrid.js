import "./App.css";
import Book from "./Book";

const BookGrid = ({ bookInThisShelfList }) => {
    const books = bookInThisShelfList.map((b) => (
        <Book
            key={b.title}
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