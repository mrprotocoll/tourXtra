import { NavLink } from "react-router-dom";

const NavLinkItem = ({name, link}) => {
    return (
        <li
        className={`pl-4 py-2 ${
          isActive(link)
            ? 'bg-lGreen text-white'
            : 'hover:bg-lGreen hover:text-white'
        }`}
      >
        <NavLink to="/">{name}</NavLink>
      </li>
    )
}

export default NavLinkItem;