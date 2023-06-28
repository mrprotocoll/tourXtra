import { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { destroySession, TOKENKEY } from 'util/auth';
import NavLinkItem from './NavLinkItem';

// eslint-disable-next-line react/prop-types
const NavLinks = ({ toggleNavbar }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const items = [
    { name: 'TOURS', link: '/' },
    { name: 'MY RESERVATIONS', link: '/reservations' },
    { name: 'ADD A TOUR', link: '/add-tour' },
    { name: 'ADD RESERVATION', link: '/add-reservation' },
    { name: 'DELETE TOUR', link: '/delete-tour' },
  ];

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
      {
        items.map((item) => (
          <NavLinkItem key={item.name} name={item.name} isActive={isActive} link={item.link} />
        ))
      }

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
