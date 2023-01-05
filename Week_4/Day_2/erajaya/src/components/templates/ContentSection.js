import React from 'react';

const ContentSection = () => {
  return (
    <div className="container max-w-[1024px] flex flex-col items-center justify-center my-5 px-20 py-10">
      <span className="text-[47px] font-bold font-sans py-20 ">
        Our Strategy Framework
      </span>
      <img src={'/Framework 2022.png'} alt="Framework 2022" />
      <span className="text-[47px] font-bold font-sans py-20 ">
        Explore Our Network
      </span>
      <div className="grid grid-cols-3 gap-5 text-white w-full">
        <div className="bg-erajaya text-center rounded-lg py-3 px-[10px]">
          <span>97 Distribution centers</span>
        </div>
        <div className="bg-erajaya text-center rounded-lg py-3 px-[10px]">
          <span>1,447 retail outlets</span>
        </div>
        <div className="bg-erajaya text-center rounded-lg py-3 px-[10px]">
          <span>+/- 69,000+ 3 party billed outlets</span>
        </div>
      </div>
      <span className="my-5 self-start font-sans text-[#4d4d4d] text-left">
        Map of operations (as of 30 September 2022)
      </span>
      <img src="/Map ERAA.png" alt="Map ERAA" />
      <div className="my-5 w-full flex justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-erajaya rounded-full w-3 h-3" />
          <span className="font-sans text-[#4d4d4d] text-left">
            Erajaya Distribution Centers & Retail Area
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-warning rounded-full w-3 h-3" />
          <span className="font-sans text-[#4d4d4d] text-right">
            Erajaya Distribution Centers & Retail Area
          </span>
        </div>
      </div>
      <div className="flex flex-col w-full gap-3">
        <div className="grid grid-cols-3 bg-erajaya text-white w-full rounded-t-lg shadow-lg drop-shadow">
          <span className="text-left font-bold p-3 font-sans">AREA</span>
          <span className="text-center font-bold p-3 font-sans">
            DISTRIBUTION CENTER
          </span>
          <span className="text-center font-bold p-3 font-sans">RETAIL</span>
        </div>
        <div className="w-full rounded-lg shadow-lg drop-shadow">
          <div className="grid grid-cols-3 bg-white text-black p-3">
            <span className="text-left font-sans py-2">Java & Bali</span>
            <span className="text-center font-sans py-2 border-x border-[#ccc]">
              52
            </span>
            <span className="text-center font-sans py-2">972</span>
          </div>
        </div>
        <div className="w-full rounded-lg shadow-lg drop-shadow">
          <div className="grid grid-cols-3 bg-white text-black p-3">
            <span className="text-left font-sans py-2">Sumatera</span>
            <span className="text-center font-sans py-2 border-x border-[#ccc]">
              24
            </span>
            <span className="text-center font-sans py-2">168</span>
          </div>
        </div>
        <div className="w-full rounded-lg shadow-lg drop-shadow">
          <div className="grid grid-cols-3 bg-white text-black p-3">
            <span className="text-left font-sans py-2">Kalimantan</span>
            <span className="text-center font-sans py-2 border-x border-[#ccc]">
              8
            </span>
            <span className="text-center font-sans py-2">52</span>
          </div>
        </div>
        <div className="w-full rounded-lg shadow-lg drop-shadow">
          <div className="grid grid-cols-3 bg-white text-black p-3">
            <span className="text-left font-sans py-2">Sulawesi & Others</span>
            <span className="text-center font-sans py-2 border-x border-[#ccc]">
              7
            </span>
            <span className="text-center font-sans py-2">79</span>
          </div>
        </div>
        <div className="w-full rounded-lg shadow-lg drop-shadow">
          <div className="grid grid-cols-3 bg-white text-black p-3">
            <span className="text-left font-sans py-2">Overseas</span>
            <span className="text-center font-sans py-2 border-x border-[#ccc]">
              6
            </span>
            <span className="text-center font-sans py-2">176</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
