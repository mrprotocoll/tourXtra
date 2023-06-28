import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const NavLinkItem = ({ name, link, isActive }) => (
  <li className={`pl-4 py-2 ${
    isActive(link)
      ? 'bg-lGreen text-white'
      : 'hover:bg-lGreen hover:text-white'
  }`}
  >
    <NavLink to="/">{name}</NavLink>
  </li>
);

NavLinkItem.propTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    isActive: PropTypes.func.isRequired,
};

export default NavLinkItem;
