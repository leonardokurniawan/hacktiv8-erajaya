import React from 'react';
import { twMerge } from 'tailwind-merge';

const Text = ({ className, children, ...otherProps }) => {
  return (
    <span
      className={twMerge('font-sans text-white', className)}
      {...otherProps}>
      {children}
    </span>
  );
};

export default Text;
