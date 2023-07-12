import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import Categories from './pages/categories';
import BookPage from './pages/bookPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<BookPage />}
        />
        <Route
          path="/categories"
          element={<Categories />}
        />
      </Routes>
    </div>
  );
}

export default App;
