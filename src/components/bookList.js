import { useSelector } from 'react-redux';
import Book from './book';
import '../styles/bookList.css';

function BookList() {
  const { books } = useSelector((state) => state.book);

  return (
    <ul className="bookList-container">
      {books.map((book) => (
        <Book
          key={book.item_id}
          book={book}
        />
      ))}
    </ul>
  );
}

export default BookList;
