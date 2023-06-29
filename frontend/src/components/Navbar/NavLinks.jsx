import NavLinkItem from './NavLinkItem';
import Session from './Session';

// eslint-disable-next-line react/prop-types
const NavLinks = ({ toggleNavbar }) => {
  const items = [
    { name: 'TOURS', link: '/' },
    { name: 'MY RESERVATIONS', link: '/reservations' },
    { name: 'ADD A TOUR', link: '/add-tour' },
    { name: 'ADD RESERVATION', link: '/add-reservation' },
    { name: 'DELETE TOUR', link: '/delete-tour' },
  ];

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
