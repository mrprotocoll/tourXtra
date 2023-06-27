import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from 'react-icons/fa';

const MediaLinks = () => (
  <div className="flex justify-center fixed left-6 bottom-16 ">
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noreferrer"
      className="mr-3 text-xl sm:text-2xl text-dimIcon hover:text-cyan-800"
    >
      <FaFacebook />
    </a>
    <a
      href="https://twitter.com"
      target="_blank"
      rel="noreferrer"
      className="mr-3 text-xl sm:text-2xl text-dimIcon hover:text-cyan-800"
    >
      <FaTwitter />
    </a>
    <a
      href="https://instagram.com"
      target="_blank"
      rel="noreferrer"
      className="mr-3 text-xl sm:text-2xl text-dimIcon hover:text-cyan-800"
    >
      <FaInstagram />
    </a>
    <a
      href="https://pinterest.com"
      target="_blank"
      rel="noreferrer"
      className="text-xl sm:text-2xl text-dimIcon hover:text-cyan-800"
    >
      <FaPinterest />
    </a>
  </div>
);

export default MediaLinks;
