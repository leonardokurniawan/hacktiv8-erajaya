import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  console.log(location?.pathname);
  const urls = [
    'about',
    'experience',
    'education',
    'skills',
    'interests',
    'awards',
  ];
  return (
    <nav className="flex flex-col items-center justify-center gap-5 w-1/5 bg-secondary h-[100vh] text-light">
      <Link to="/">
        <img
          src="/pp.png"
          alt="Profile"
          className="rounded-full border-8 border-primary"
          width={200}
          height={200}
        />
      </Link>
      {urls?.map((url, idx) => {
        return (
          <Link to={'/' + url} key={idx}>
            <span
              className={`uppercase font-bold hover:text-lighter ${
                location?.pathname === '/' + url ? 'text-lightest' : ''
              }`}>
              {url}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
