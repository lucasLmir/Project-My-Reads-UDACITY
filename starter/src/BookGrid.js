import "./App.css";
import Book from "./Book";

const BookGrid = ({ bookList, shelf }) => {
    console.log(bookList)
    const books = bookList.map((b) => (
        <Book
            key={b.id}
            BookKey={b.id}
            BackgroundImage={b.imageLinks ? b.imageLinks.thumbnail : null}
            BookTitle={b.title}
            BookAuthors={b.authors}
            shelf={shelf}
        />
    ));

    return (
        <ol className="books-grid">
            {books}
        </ol>
    );
};

export default BookGrid;