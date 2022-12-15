

const BookSelector = ({ shelf, BookKey }) => {
    return (
        <select>
            <option value="none" disabled>
                Move to...
            </option>
            <option value="currentlyReading">
                {shelf === "currentlyReading" && "✓ "}
                Currently Reading
            </option>
            <option value="wantToRead">
                {shelf === "wantToRead" && "✓ "}
                Want to Read</option>
            <option value="read">
                {shelf === "read" && "✓ "}
                Read</option>
            <option value="none">None</option>
        </select>
    );
};

export default BookSelector;