import { useEffect, useState } from 'react';
import {
  Link, NavLink, useLocation, useNavigate,
} from 'react-router-dom';
import { destroySession, TOKENKEY } from 'util/auth';
import NavLinkItem from './ NavLinkItem';

// eslint-disable-next-line react/prop-types
const NavLinks = ({ toggleNavbar }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isActive = (path) => location.pathname === path;

  const handleLogout = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
    destroySession();
    navigate('/login');
  };

  useEffect(() => {
    if (localStorage.getItem(TOKENKEY)) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn, handleLogout]);

  return (
    <ul className="mt-4 w-full text-lg sm:text-lg font-bold" onClick={toggleNavbar}>
      <NavLinkItem name="TOURS" isActive={isActive} Link="/" />

      <li
        className={`pl-4 py-2 ${
          isActive('/reservations')
            ? 'bg-lGreen text-white'
            : 'hover:bg-lGreen hover:text-white'
        }`}
      >
        <NavLink to="/reservations">MY RESERVATIONS</NavLink>
      </li>
      <li
        className={`pl-4 py-2 ${
          isActive('/add-tour')
            ? 'bg-lGreen text-white'
            : 'hover:bg-lGreen hover:text-white'
        }`}
      >
        <NavLink to="/add-tour">ADD A TOUR</NavLink>
      </li>
      <li
        className={`pl-4 py-2 ${
          isActive('/add-reservation')
            ? 'bg-lGreen text-white'
            : 'hover:bg-lGreen hover:text-white'
        }`}
      >
        <NavLink to="/add-reservation">ADD RESERVATION</NavLink>
      </li>
      <li
        className={`pl-4 py-2 ${
          isActive('/delete-tour')
            ? 'bg-lGreen text-white'
            : 'hover:bg-lGreen hover:text-white'
        }`}
      >
        <NavLink to="/delete-tour">DELETE TOUR</NavLink>
      </li>
      {isLoggedIn ? (
        <li className="pl-4 py-2 hover:bg-lGreen hover:text-white ">
          <button type="button" onClick={handleLogout}>
            LOGOUT
          </button>
        </li>
      ) : (
        <li className="pl-4 py-2 hover:bg-lGreen hover:text-white sm:text-lg">
          <NavLink to="/login">LOGIN</NavLink>
        </li>

      )}

    </ul>
  );
};

export default NavLinks;
