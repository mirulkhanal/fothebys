import React, { useEffect } from 'react';
import Banner from '../ErrorBanner';
import AuctionItem from './AuctionItem';

const AuctionList = ({ auctions, location }) => {
  return (
    <>
      <h1 className='text-2xl font-extrabold my-4 '>
        {location ? `Auctions in ${location}` : 'Auctions'}
      </h1>
      <div className='w-full h-fit flex items-center gap-10 justify-items-center p-10'>
        {auctions && auctions.length === 0 && (
          <div className='w-full h-full'>
            <Banner message={'No art found for this auction'} />
          </div>
        )}
        {auctions &&
          auctions.map((auction) => (
            <AuctionItem auction={auction} key={auction._id} />
          ))}
      </div>
    </>
  );
};

export default AuctionList;
