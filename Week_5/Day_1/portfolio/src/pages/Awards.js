import React from 'react';
import TextIcon from '../components/TextIcon';

const Awards = () => {
  const awards = [''];
  return (
    <div className="flex flex-col justify-center h-[100vh] gap-5 text-dark">
      <span className="text-[72px] font-sans font-bold uppercase text-dark leading-tight ">
        Awards & Certifications
      </span>
      <div className="grid grid-cols-1 gap-2">
        {awards?.map((skill) => {
          if (skill && skill !== '')
            return (
              <TextIcon
                icon={'checkshield'}
                iconClassName={'w-6 h-6 text-white'}
                fillIcon={'orange'}>
                {skill}
              </TextIcon>
            );
        })}
      </div>
    </div>
  );
};

export default Awards;
