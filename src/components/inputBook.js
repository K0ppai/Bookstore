import '../styles/inputBook.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as id } from 'uuid';
import { addBooks } from '../redux/books/booksSlice';

function InputBook() {
  const dispatch = useDispatch();
  const defaultBook = {
    title: '',
    author: '',
    category: '',
  };
  const [newBook, setNewBook] = useState(defaultBook);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newBook.title || !newBook.author || !newBook.category) return;
    dispatch(addBooks({ ...newBook, item_id: id() }));
    e.target.reset();
    setNewBook(defaultBook);
  };

  const changeDefaultBook = (property, e) => {
    setNewBook({ ...newBook, [property]: e.target.value });
  };

  return (
    <div className="input-container">
      <h1>ADD NEW BOOK</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Book title" onChange={(e) => changeDefaultBook('title', e)} />
        <input placeholder="Author" onChange={(e) => changeDefaultBook('author', e)} />
        <select defaultValue="Category" onChange={(e) => changeDefaultBook('category', e)}>
          <option disabled>Category</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Fiction">Fiction</option>
          <option value="Horror">Horror</option>
          <option value="Humor">Humor</option>
          <option value="Nonfiction">Nonfiction</option>
          <option value="Novel">Novel</option>
          <option value="Romance">Romance</option>
          <option value="Self-help">Self-help</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default InputBook;
