import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <ul className="navbar">
      <li className="navbar__item">
        <NavLink to="/" className="navbar__link">
          Home
        </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink to="/listen" className="navbar__link">
          Listen
        </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink to="/the-girls" className="navbar__link">
          The Girls
        </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink to="/follow" className="navbar__link">
          Follow
        </NavLink>
      </li>
    </ul>
  )
}

export default Navbar
