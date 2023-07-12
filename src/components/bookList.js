import PropTypes from 'prop-types';
import Book from './book';
import '../styles/bookList.css';

function BookList({ booksProps, removeBook }) {
  return (
    <ul className="bookList-container">
      {booksProps.map((book) => (
        <Book key={book.id} bookProps={book} removeBook={removeBook} />
      ))}
    </ul>
  );
}

BookList.propTypes = {
  booksProps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  removeBook: PropTypes.func.isRequired,
};
export default BookList;
