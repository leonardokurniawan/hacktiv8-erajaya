import React, { useState } from 'react';
import Text from '../atoms/Text';
import { Link } from 'react-router-dom';
import Input from '../molecules/Input';
import Button from '../molecules/Button';

const Header = () => {
  const [search, setSearch] = useState();
  return (
    <nav className="navbar bg-black">
      <div className="navbar-center !items-center !justify-between">
        <Link to="/">
          <Text className="!font-anton tracking-wide text-xl rounded font-bold font-2xl px-2 bg-omdb text-black">
            OMDb
          </Text>
        </Link>
        <Input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={'Search OMDb'}
          className={'input-xs rounded w-full !max-w-none'}
        />
        <Link to={'/search/' + search}>
          <Button
            className={
              'btn-ghost hover:bg-[#272727] active:bg-[#272727] rounded'
            }
            textClassName="whitespace-nowrap text-sm font-semibold">
            Search
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
