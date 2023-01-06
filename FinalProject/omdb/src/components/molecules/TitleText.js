import React from 'react';
import { twMerge } from 'tailwind-merge';
import Text from '../atoms/Text';
import Icons from '../icons/Icons';

const TitleText = ({ className, textClassName, children }) => {
  return (
    <div className="flex gap-3 relative">
      <div className="bg-omdb w-1 h-full absolute rounded" />
      <div className="flex items-center gap-3">
        <Text className={twMerge('pl-3', textClassName)}>{children}</Text>
        <Icons name="chevron-right" className="w-6 h-5" />
      </div>
    </div>
  );
};

export default TitleText;
