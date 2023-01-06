import React from 'react';
import { twMerge } from 'tailwind-merge';

const Input = ({ type, placeholder, className, ...otherProps }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={twMerge('input', className)}
      {...otherProps}
    />
  );
};

export default Input;
