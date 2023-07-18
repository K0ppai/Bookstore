import '../styles/bookList.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';

function Book({ book }) {
  const dispatch = useDispatch();

  return (
    <li>
      <div className="book-container">
        <p className="book-category">{book.category}</p>
        <p className="book-title">{book.title}</p>
        <p className="book-author">{book.author}</p>
      </div>
      <div className="book-container-buttons">
        <button type="button">Comments</button>
        <button
          type="button"
          onClick={() => dispatch(removeBook(book.item_id))}
        >
          Remove
        </button>
        <button type="button">Edit</button>
      </div>
    </li>
  );
}

export default Book;
Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
