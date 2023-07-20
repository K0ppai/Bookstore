import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Book from './book';
import '../styles/bookList.css';
import { getBooks } from '../redux/books/booksSlice';

function BookList() {
  const books = useSelector((state) => state.book.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <ul className="bookList-container">
      {books.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
    </ul>
  );
}

export default BookList;
