import '../styles/bookList.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { removeBooks } from '../redux/books/booksSlice';

function Book({ book }) {
  const dispatch = useDispatch();
  const percentage = Math.floor(Math.random() * 100);

  return (
    <li className="book-card">
      <div className="book">
        <div className="book-container">
          <p className="book-category">{book.category}</p>
          <p className="book-title">{book.title}</p>
          <p className="book-author">{book.author}</p>
        </div>
        <div className="book-container-buttons">
          <button type="button">Comments</button>
          <button type="button" onClick={() => dispatch(removeBooks(book.item_id))}>
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="book-progress-container">
        <div className="circular-progress-bar">
          <CircularProgressbar
            value={percentage}
            styles={buildStyles({
              pathTransitionDuration: 0.5,
              pathColor: 'rgba(2, 144, 255)',
              trailColor: '#d6d6d6',
              backgroundColor: 'transparent',
            })}
          />
        </div>
        <div className="book-progress-text">
          <p className="book-progress-percentage">
            {percentage}
            %
          </p>
          <p className="book-progress-completed">Completed</p>
        </div>
      </div>
      <div className="book-chapter-container">
        <p className="book-current-chapter">CURRENT CHAPTER</p>
        <p className="book-current-lesson">Introduction</p>
        <button type="button">UPDATE PROGRESS</button>
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
