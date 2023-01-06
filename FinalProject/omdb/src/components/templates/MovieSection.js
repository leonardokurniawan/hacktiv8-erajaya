import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../pages/movies/action/getMovies';
import Text from '../atoms/Text';
import TitleText from '../molecules/TitleText';
import MovieCatalog from '../organisms/MovieCatalog';

const MovieSection = ({ title }) => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.Movies);

  useEffect(() => {
    dispatch(getMovies(title));
    return () => {};
  }, [dispatch, title]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full">
        <Text className={'text-center'}>Loading...</Text>
      </div>
    );
  }
  return (
    <>
      <div className="flex flex-col gap-3 mb-5">
        <TitleText textClassName={'text-2xl font-semibold'}>{title}</TitleText>
        <span className="text-[#b3b3a8]">{title} movies</span>
      </div>
      <div className="grid grid-cols-6 gap-5">
        {data?.map(({ Title, Poster, imdbID }, index) => {
          return (
            <Fragment key={imdbID + index}>
              <MovieCatalog title={Title} img={Poster} id={imdbID} />
            </Fragment>
          );
        })}
      </div>
    </>
  );
};

export default MovieSection;
