import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';

const DesktopNav = () => (
  <nav className="hidden sm:block h-screen bg-white shadow-2xl">
    <div className="flex p-2 pb-14">
      <NavLink to="/"><img className="h-10" src="logo.png" alt="Logo" /></NavLink>
    </div>
    <NavLinks />
    <SocialLinks />

    <p className="text-xs sm:text-sm text-gray-500 fixed bottom-6 left-6">© 2023 TourXtra</p>
  </nav>
);

export default DesktopNav;
