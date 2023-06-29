import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import DesktopNav from './DesktopNav';
import MobileNv from './MobileNav';
import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <DesktopNav />
      <MobileNv />
    </div>
  );
};

export default Nav;
