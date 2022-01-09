import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { BsSearch } from 'react-icons/bs';
const Search = () => {
  const [location, setLocation] = useState('');
  const router = useRouter();

  const searchHandler = (e) => {
    e.preventDefault();
    if (location.trim()) {
      router.push(`auction/?location=${location}`);
    } else {
      router.push('/auction');
    }
  };
  return (
    <form
      onSubmit={searchHandler}
      className='flex h-full w-full  justify-between items-center'>
      <div className='mx-auto w-2/4 shadow-2xl flex h-10 gap-4'>
        <input
          className='w-full rounded-lg text-center outline-none'
          type='text'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder='Kathmandu...'
        />
        <button
          className='flex justify-items-center items-center gap-2 bg-primary-red rounded-tr-lg rounded-br-lg px-4 text-primary-white-2 font-semibold'
          type='submit'>
          <span>Search</span>
          <BsSearch />
        </button>
      </div>
    </form>
  );
};

export default Search;
