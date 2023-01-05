import React from 'react';
import Dropdown from '../organisms/Dropdown';
import GlobeIcon from '../icons/GlobeIcon';
import ChevronDownIcon from '../icons/ChevronDownIcon';
import SearchIcon from '../icons/SearchIcon';
import HamburgerIcon from '../icons/HamburgerIcon';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const Navbar = () => {
  const { width } = useWindowDimensions();
  const menus = [
    {
      title: 'About Us',
      children: [
        'Company Profile',
        'Vision & Mission',
        'Awards',
        'Milestones',
        'Management Profile',
      ],
    },
    { title: 'Corporate Governance' },
    { title: 'Line of Verticals' },
    {
      title: 'Investor Relations',
      children: [
        'Financial Highlights',
        'Financial Reports',
        'Annual Reports',
        'Investor Update',
        'Propectus',
        'General Meeting of Shareholders',
        'Stock Price Information',
      ],
    },
    { title: 'Social and Events' },
    { title: 'E-Commerce' },
  ];
  return (
    <div className="navbar fixed top-0 bg-erajaya z-10 text-white h-[65px] py-[.74419em]">
      <div className="navbar-center">
        <a href="/">
          <img
            src="/logo.png"
            alt="Erajaya"
            width={65}
            className={width < 1023 ? 'mr-auto' : ''}
          />
        </a>
        {width > 1023 &&
          menus?.map(({ title, children }, idx) => {
            return <Dropdown key={idx} title={title} children={children} />;
          })}
        <Dropdown
          title={
            <div className="flex gap-1 items-center">
              <GlobeIcon className="w-5 h-5" />
              <span>EN</span>
              <ChevronDownIcon className="w-4 h-4" />
            </div>
          }
          children={['Indonesia', 'English']}
        />
        <Dropdown
          title={<SearchIcon className="w-4 h-4" />}
          content={
            <div className="flex">
              <input
                className="input rounded rounded-r-none w-[248px] h-[36px] bg-gray-100 text-sm"
                placeholder="Search"
              />
              <div className="btn btn-sm bg-gray-400 rounded rounded-l-none h-full">
                <SearchIcon className="w-4 h-4 font-bold" />
              </div>
            </div>
          }
          isClick
        />
        {width < 1024 && (
          <Dropdown
            title={<HamburgerIcon className="w-5 h-5" />}
            content={
              <div className="bg-erajaya text-white">
                {menus?.map(({ title, children }, idx) => {
                  return (
                    <div
                      key={idx}
                      className="flex w-[92vw] items-center px-3 py-4">
                      <span className="mr-auto">{title}</span>
                      {children && children?.length > 0 && (
                        <span className="text-white">
                          <ChevronDownIcon className="w-4 h-4" />
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            }
            isClick
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
