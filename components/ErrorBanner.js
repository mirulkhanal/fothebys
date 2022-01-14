import React from 'react';

const Banner = ({ message }) => {
  return (
    <div role='alert' className='w-full h-full'>
      <div className='text-white font-bold rounded-t px-4 py-2 bg-primary-red'>
        Error
      </div>
      <div className='border border-t-0 border-red-400 rounded-b bg-secondary-red px-4 py-3 text-red-700'>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Banner;
