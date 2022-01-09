import Link from 'next/link';
import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { BsFillCalendarWeekFill } from 'react-icons/bs';
const AuctionItem = ({ auction }) => {
  return (
    <div
      className='flex flex-col shadow-2xl justify-evenly items-center py-5 bg-primary-gray text-primary-white'
      key={auction._id}>
      <h1 className='w-full flex-grow text-center'>{auction.title}</h1>
      <h2 className='flex gap-2 items-center'>
        <FaLocationArrow />
        {auction.location}
      </h2>
      <h3 className='my-4 flex gap-2 items-center'>
        <BsFillCalendarWeekFill />
        {new Date(auction.date).toDateString()}
      </h3>
      <Link href={`/auction/${auction._id}`}>
        <a className='bg-primary-red rounded-lg shadow-lg py-3 px-4 w-2/4 text-center text-primary-white'>
          Get Catalogue
        </a>
      </Link>
    </div>
  );
};

export default AuctionItem;
