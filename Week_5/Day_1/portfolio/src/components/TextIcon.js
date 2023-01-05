import React from 'react';
import Icons from './icons/Icons';

const TextIcon = ({ icon, iconClassName, className, fillIcon, children }) => {
  return (
    <div className="flex items-center gap-3">
      <Icons name={icon} className={iconClassName} fill={fillIcon} />
      <span className={className}>{children}</span>
    </div>
  );
};

export default TextIcon;
