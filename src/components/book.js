import PropTypes from 'prop-types';
import '../styles/bookList.css';

function Book({ bookProps, removeBook }) {
  return (
    <li>
      <div className="book-container">
        <p className="book-category">{bookProps.category}</p>
        <p className="book-title">{bookProps.title}</p>
        <p className="book-author">{bookProps.author}</p>
      </div>
      <div className="book-container-buttons">
        <button type="button">Comments</button>
        <button type="button" onClick={() => removeBook(bookProps.id)}>Remove</button>
        <button type="button">Edit</button>
      </div>
    </li>
  );
}

Book.propTypes = {
  bookProps: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
