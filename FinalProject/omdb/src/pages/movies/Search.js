import React from 'react';
import { useParams } from 'react-router-dom';
import MovieSection from '../../components/templates/MovieSection';

const Search = () => {
  const params = useParams();
  return (
    <div className="p-4">
      <MovieSection title={params?.key} />
    </div>
  );
};

export default Search;
