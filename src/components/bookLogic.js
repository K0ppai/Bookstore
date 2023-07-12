import { useState } from 'react';
import BookList from './bookList';
import InputBook from './inputBook';

function BookLogic() {
  const [books, setBooks] = useState([
    {
      title: 'Captivate: The Science of Succeeding with People', author: 'Vanessa Van Edwards', category: 'Self-help', id: 1,
    },
    {
      title: 'Harry Potter', author: 'J. K. Rowling', category: 'Fantasy', id: 2,
    },
    {
      title: 'Becoming Supernatural', author: 'Joe Dispenza', category: 'Self-help', id: 3,
    },
  ]);

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div>
      <BookList booksProps={books} removeBook={removeBook} />
      <InputBook />
    </div>
  );
}

export default BookLogic;
