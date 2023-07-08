import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from 'react-icons/fa';
import SocialLinkItem from './SocialLinkItem';

const SocialLinks = () => (
  <div className="flex justify-center fixed left-6 bottom-16 ">
    <SocialLinkItem link="#"><FaFacebook /></SocialLinkItem>
    <SocialLinkItem link="#"><FaTwitter /></SocialLinkItem>
    <SocialLinkItem link="#"><FaInstagram /></SocialLinkItem>
    <SocialLinkItem link="#"><FaPinterest /></SocialLinkItem>
  </div>
);

export default SocialLinks;
