import React from 'react';
import Text from '../atoms/Text';
import Button from '../molecules/Button';
import { Link } from 'react-router-dom';

const MovieCatalog = ({ title, img, id }) => {
  return (
    <Link className="w-full hover:opacity-80" to={'/' + id}>
      <div className="w-[150px] flex flex-col items-center bg-[#1a1a1a]">
        <img
          src={img}
          alt={title}
          width="100%"
          className="object-cover min-h-[222px]"
        />
        <div className="flex flex-col w-full p-3 gap-3">
          <div className="movie-title text-ellipsis overflow-hidden h-[2.5rem] relative">
            <Text className="movie-title font-normal tracking-wide antialiased leading-5 text-ellipsis ">
              {title}
            </Text>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCatalog;
