import React from 'react';

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  const { className } = props;

  return (
    <input
      {...props}
      className={`rounded-xl w-full text-white h-12 bg-black bg-opacity-60 border-none ${className}`}
    />
  );
};

export default Input;
