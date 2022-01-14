import Link from 'next/link';
import React from 'react';
const AuctionItem = ({ auction }) => {
  return (
    <div
      className='flex flex-col gap-10 items-center bg-primary-white-2 rounded-3xl shadow-2xl h-full'
      key={auction._id}>
      <h1 className='text-xl text-center font-bold py-4 text-primary-white-2 bg-primary-red w-full'>
        {auction.title}
      </h1>
      <h2 className='flex items-center gap-5 mx-5 text-xl font-semibold'>
        Location:
        <span>{auction.location}</span>
      </h2>
      <h2 className='flex items-center gap-5 mx-5 text-xl font-semibold'>
        <span>Date:</span>
        {new Date(auction.date).toDateString()}
      </h2>
      <Link href={`/auction/${auction._id}`}>
        <a className='px-5 py-3 mx-2 my-2 bg-primary-red text-primary-white-2 rounded-xl text-md font-semibold'>
          Get Catalogue
        </a>
      </Link>
    </div>
  );
};

export default AuctionItem;
