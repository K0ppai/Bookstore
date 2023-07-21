import { NavLink } from 'react-router-dom';
import '../styles/navBar.css';
import { ImUser } from 'react-icons/im';

function NavBar() {
  return (
    <nav>
      <div className="wrapper">
        <h1>Bookstore CMS</h1>
        <ul className="links-container">
          <li>
            <NavLink to="/">BOOKS</NavLink>
          </li>
          <li>
            <NavLink to="/categories">CATEGORIES</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <ImUser className="userIcon" />
      </div>
    </nav>
  );
}

export default NavBar;
