import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const MainSection = () => {
  const [count, setCount] = useState(100);

  useEffect(() => {
    setInterval(() => setCount(count - 1), 100);
  }, []);

  const items = [
    {
      title: 'Our Story',
      subtitle: 'On track to be the largest lifestyle smart retailer',
      desc: 'We are aggressively growing our products and services portfolio to lead the lifestyle products evolution',
      images: [
        '/our-story/1.jpg',
        '/our-story/2.jpg',
        '/our-story/3.jpg',
        '/our-story/4.jpg',
      ],
    },
    {
      title: 'Our Business',
      subtitle: 'Integrated and comprehensive proposition to customers',
      desc: 'We offer end-to-end lifestyle product and solution',
      images: [
        '/our-business/1.jpg',
        '/our-business/2.jpg',
        '/our-business/3.jpg',
      ],
    },
    {
      title: 'Our Network',
      subtitle: 'Market leader with nationwide omnichannel network',
      desc: 'Our vast network of channel to deliver the best personalized and innovative experience to customer',
      images: [
        '/our-network/1.jpg',
        '/our-network/2.jpg',
        '/our-network/3.jpg',
        '/our-network/4.jpg',
      ],
    },
  ];
  const news = [
    {
      image: '/newsroom/1.jpeg',
      date: 'November 28 2022',
      desc: 'Erajaya Digital Welcome The End of The Year, Open 62 New Shops',
    },
    {
      image: '/newsroom/2.jpg',
      date: 'November 25 2022',
      desc: 'Erajaya Active Lifestyle Open 4 New Store',
    },
    {
      image: '/newsroom/3.jpeg',
      date: 'November 24 2022',
      desc: 'Erablue Opens Its First Shop in Indonesia',
    },
  ];
  return (
    <div className="main w-full mt-14 relative text-white">
      {/* <Stock /> */}
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        swipeable
        autoPlay
        infiniteLoop
        interval={10000}
        onChange={() => {
          setCount(100);
        }}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const defStyle = {
            color: '#ffffff80',
            cursor: 'pointer',
            content: '',
          };
          const style = isSelected
            ? {
                ...defStyle,
                color: '#ffffff',
              }
            : { ...defStyle };
          return (
            <>
              <span
                className={`w-full min-h-[25px] font-sans text-xs text-center uppercase border-b-[1px] whitespace-nowrap ${
                  isSelected ? 'border-b-[#11074e80]' : 'border-b-[#ffffff80]'
                }`}
                style={style}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
                aria-label={`${label} ${index + 1}`}>
                {index === 0
                  ? 'Our Story'
                  : index === 4
                  ? 'Our Business'
                  : index === 7
                  ? 'Our Network'
                  : ''}
              </span>
            </>
          );
        }}>
        {items?.map(({ title, subtitle, desc, images }, idx) =>
          images?.map((image, id) => {
            return (
              <div key={idx + '' + id} className="relative">
                <img
                  src={image}
                  alt={title}
                  className="h-[calc(100vh-56px)] !object-cover"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50" />
                <div className="absolute w-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                  <div className="w-[94%] max-w-[960px] flex my-0 mx-auto">
                    <div className="flex flex-col justify-center items-start gap-[24px]">
                      {id === 0 && (
                        <div className="flex flex-col">
                          <span className="slide-subtitle uppercase font-sans text-[1.5em] tracking-[2px]">
                            {title}
                          </span>
                          <div className="bg-[#11074e6b] w-[84%] h-[12px]" />
                        </div>
                      )}
                      <span className="text-[3.75em] shadow-sm font-medium text-left font-sans leading-[.96451em]">
                        {subtitle}
                      </span>
                      <span className="text-left">{desc}</span>
                      <button className="btn btn-outline arrow text-white hover:text-black h-fit py-1 rounded-lg px-8 hover:bg-[#ffffffc2]">
                        <span className="font-sans uppercase font-light text-[10px] leading-1">
                          Explore
                        </span>
                      </button>
                    </div>
                    <div className="w-full max-w-[303px]"></div>
                  </div>
                </div>
              </div>
            );
          }),
        )}
      </Carousel>
      <div className="absolute top-0 right-0  bottom-0 left-0 flex items-center justify-center px-[3%] pointer-events-none">
        <div className="w-[960px] h-[100px]"></div>
        <div className="w-[303px] flex flex-col items-center bg-[#1a1a1a66] py-4 gap-2 pointer-events-all">
          <span className="font-sans uppercase text-xl">
            Erajaya Stock Price
          </span>
          <div className="flex items-center justify-center gap-2">
            <span className="font-['Open Sans'] text-lg mb-5 font-semibold">
              Rp
            </span>
            <span className="font-['Open Sans'] text-[50px]">382</span>
          </div>
          <div className="flex text-[#f44336] gap-2">
            <img
              src="/icon-arrow-down.svg"
              className="leading-[1]"
              alt="down"
            />
            <span className="font-bold">-6.00</span>
            <span className="">(-1.55%)</span>
          </div>
          <div className="px-4 w-full flex flex-col gap-2">
            <ul className="border border-[#ffffff4d] w-full">
              <li className="border-b mx-2 py-2 px-3 border-[#ffffff4d] flex justify-between items-center">
                <span className="text-xs ">Volume</span>
                <span className="text-xs ">22,145,300</span>
              </li>
              <li className="border-b mx-2 py-2 px-3 border-[#ffffff4d] flex justify-between items-center">
                <span className="text-xs ">Daily Range</span>
                <span className="text-xs ">378 - 388</span>
              </li>
              <li className="border-b mx-2 py-2 px-3 border-[#ffffff4d] flex justify-between items-center">
                <span className="text-xs ">52 Wk Range</span>
                <span className="text-xs ">376 - 610</span>
              </li>
            </ul>
            <span className="text-right text-[11px] self-end">
              As at 05 Jan 2023 04.19 PM
            </span>
          </div>
          <div className="news border-t border-[#ffffff4d] pt-4 px-4 w-full flex flex-col gap-2">
            <span className="uppercase font-semibold text-sm text-left">
              Newsroom
            </span>
            <Carousel
              autoPlay
              infiniteLoop
              showArrows={false}
              showStatus={false}
              showThumbs={false}
              interval={3000}>
              {news?.map(({ image, date, desc }) => {
                return (
                  <div className="flex gap-2 items-start mb-5">
                    <img
                      src={image}
                      alt={date}
                      className="!object-cover !w-[111px] !h-[62px]"
                    />
                    <div className="flex flex-col">
                      <span className="text-[8px] text-left">{date}</span>
                      <span className="text-[11px] text-left">{desc}</span>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
