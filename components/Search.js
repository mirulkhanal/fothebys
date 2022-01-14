import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { BsSearch } from 'react-icons/bs';
import { FcSearch } from 'react-icons/fc';
const Search = () => {
  const [location, setLocation] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [artist, setArtist] = useState('');
  const router = useRouter();

  const searchHandler = (e) => {
    e.preventDefault();
    if (location.trim()) {
      router.push(`auction/?location=${location}`);
    } else {
      router.push('/auction');
    }
  };

  const handleArtFilterSubmit = (e) => {
    e.preventDefault();
    if (title.trim() || artist.trim() || price.trim()) {
      router.push(`art/?title=${title}&artist_name=${artist}&price=${price}`);
    } else {
      router.push('/art');
    }
  };
  return (
    <>
      <form
        onSubmit={searchHandler}
        className='flex h-full w-full flex-col justify-center gap-20 items-center'>
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
      <form
        className='flex shadow-2xl items-center justify-center rounded-3xl bg-primary-red mb-20 px-5'
        onSubmit={handleArtFilterSubmit}>
        <h1 className='px-4 text-primary-white font-semibold'>Filter arts</h1>
        <input
          type='text'
          className='outline-none'
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          placeholder='Search artist'
        />
        <input
          type='text'
          className='outline-none'
          placeholder='Search price'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type='text'
          className='outline-none'
          placeholder='Search title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className='view-btn px-5 py-3 text-primary-white' type='submit'>
          <FcSearch />
        </button>
      </form>
    </>
  );
};

export default Search;
