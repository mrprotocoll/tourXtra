import { NavLink, useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const NavLinkItem = ({ name, link }) => {
  const location = useLocation();

  return (
    <li className={`pl-4 py-2 ${
      location.pathname === link
        ? 'bg-lGreen text-white'
        : 'hover:bg-lGreen hover:text-white'
    }`}
    >
      <NavLink to={link}>{name}</NavLink>
    </li>
  );
};

NavLinkItem.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NavLinkItem;
