import '../styles/inputBook.css';

function InputBook() {
  return (
    <div className="input-container">
      <h1>ADD NEW BOOK</h1>
      <form>
        <input placeholder="Book title" />
        <select>
          <option selected>Category</option>
          <option value="2">Action</option>
          <option value="3">Drama</option>
        </select>
        <button type="button">ADD BOOK</button>
      </form>
    </div>
  );
}

export default InputBook;
