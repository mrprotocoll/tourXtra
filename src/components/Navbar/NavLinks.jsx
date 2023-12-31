import { useEffect, useState } from 'react';
import { getUser, USERKEY } from 'util/auth';
import NavLinkItem from './NavLinkItem';
import Session from './Session';

// eslint-disable-next-line react/prop-types
const NavLinks = ({ toggleNavbar }) => {
  const [user, setUser] = useState(getUser);
  const [items, setItems] = useState(
    [
      { name: 'TOURS', link: '/' },
    ],
  );

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem(USERKEY)) ?? null);
    if (user) {
      setItems([{ name: 'TOURS', link: '/' }, { name: 'MY RESERVATIONS', link: '/reservations' },
        { name: 'ADD NEW TOUR', link: '/add-tour' },
        { name: 'RESERVE A TOUR', link: '/add-reservation' },
        { name: 'DELETE TOUR', link: '/delete-tour' }]);
    } else {
      setItems([
        { name: 'TOURS', link: '/' },
      ]);
    }
  }, [items]);

  return (
    <ul className="mt-4 w-full text-lg sm:text-lg font-bold" onClick={toggleNavbar}>
      {
        items.map((item) => (
          <NavLinkItem key={item.name} name={item.name} link={item.link} />
        ))
      }
      <Session />
    </ul>
  );
};

export default NavLinks;
