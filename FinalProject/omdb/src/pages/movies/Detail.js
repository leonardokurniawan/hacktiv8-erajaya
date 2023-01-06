import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Text from '../../components/atoms/Text';
import Button from '../../components/molecules/Button';
import { getDetailMovieByID } from './action/getDetailMovieByID';
import Icons from '../../components/icons/Icons';

const Detail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.Movie);

  useEffect(() => {
    dispatch(getDetailMovieByID(params.id));
    return () => {};
  }, [dispatch, params.id]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full">
        <Text className={'text-center'}>Loading...</Text>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-3 bg-[#1f1f1f] p-5">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-3">
          <Text className="text-4xl">{data?.Title}</Text>
          <div className="flex items-center gap-3 text-[#b3bcb3]">
            <Text className="capitalize text-[#b3bcb3] text-sm">
              {data?.Type}
            </Text>
            •
            <Text className="capitalize text-[#b3bcb3] text-sm">
              {data?.Year}
            </Text>
            •
            <Text className="capitalize text-[#b3bcb3] text-sm">
              {data?.Rated}
            </Text>
            •
            <Text className="capitalize text-[#b3bcb3] text-sm">
              {data?.Runtime}
            </Text>
          </div>
        </div>
        <div className="flex  gap-3">
          <div className="flex flex-col">
            <Text className="text-[#b3bcb3] font-semibold tracking-wide text-sm">
              IMDb RATING
            </Text>
            <div className="flex items-center gap-2">
              <Icons name="star" className="text-omdb" />
              <div className="flex flex-col">
                <Text className="text-[#b3bcb3]">
                  <Text className="text-white text-xl font-bold">
                    {data?.imdbRating}
                  </Text>
                  /10
                </Text>
                {data?.imdbVotes?.indexOf(',') > -1
                  ? data?.imdbVotes?.substring(
                      0,
                      data?.imdbVotes?.indexOf(','),
                    ) + 'K'
                  : data?.imdbVotes}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <Text className="uppercase font-semibold tracking-wide text-sm text-[#b3bcb3]">
              Your Rating
            </Text>
            <div className="flex gap-2 items-center">
              <Icons name="star" className="text-blue-500 w-11" />
              <Text className="text-blue-500 font-bold">Rate</Text>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-2 ">
        <img
          className="row-span-2 bg-[#313131]"
          src={data?.Poster}
          alt={data?.Title}
        />
        <div
          className={`row-span-2 col-span-2 flex items-end justify-start p-3 bg-[#313131]`}>
          <div className="flex gap-3 items-center">
            <Icons
              name="chevron-right"
              className="w-12 h-12 rounded-full border border-white p-3"
            />
            <Text className="text-2xl">Play trailer</Text>
          </div>
        </div>
        <div className="bg-[#313131] rounded-tr"></div>
        <div className="bg-[#313131] rounded-br"></div>
      </div>
      <div className="flex gap-3">
        {data?.Genre?.split(',')?.map((genre) => {
          return (
            <Text className="text-sm font-medium px-4 py-2 border border-gray-800 bg-black hover:bg-gray-900 rounded-full">
              {genre}
            </Text>
          );
        })}
      </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-3">
          <Text>{data?.Plot}</Text>
          <hr />
          <div className="flex flex-col gap-1">
            <Text className={'font-bold'}>Creators</Text>
            <Text className={'text-blue-500 '}>
              {data?.Director + ', ' + data?.Writer}
            </Text>
          </div>
          <hr />
          <div className="flex gap-1">
            <Text className={'font-bold'}>Stars</Text>
            <Text className={'text-blue-500 '}>{data?.Actors}</Text>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-end">
          <div className="flex gap-1">
            <Text className={'font-bold'}>Language</Text>
            <Text className={'text-blue-500 '}>{data?.Language}</Text>
          </div>
          <div className="flex gap-1">
            <Text className={'font-bold'}>Released</Text>
            <Text className={'text-blue-500 '}>{data?.Released}</Text>
          </div>
          <div className="flex gap-1">
            <Text className={'font-bold'}>Country</Text>
            <Text className={'text-blue-500 '}>{data?.Country}</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
