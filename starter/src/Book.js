import "./App.css";
import BookSelector from "./BookSelector";

const Book = ({ BackgroundImage, BookTitle, BookAuthors, shelf, BookKey }) => {
    return (
        <li key={BookKey}>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage:
                                `url(${BackgroundImage})`
                        }}
                    ></div>
                    <div className="book-shelf-changer">
                        <BookSelector shelf={shelf} BookKey={BookKey} />
                    </div>
                </div>
                <div className="book-title">{BookTitle}</div>
                <div className="book-authors">{BookAuthors}</div>
            </div>
        </li>
    );
};

export default Book;