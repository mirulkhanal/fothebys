import React, { useEffect } from 'react';
import Banner from '../ErrorBanner';
import AuctionItem from './AuctionItem';

const AuctionList = ({ auctions, location }) => {
  return (
    <main className='w-full h-full'>
      <h1>{location ? `Auctions in ${location}` : 'Auctions'}</h1>
      <div className='msg-container'>
        {auctions && auctions.length === 0 && (
          <Banner message={'No art found for this auction'} />
        )}
      </div>
      <div className='auction-container'>
        {auctions &&
          auctions.map((auction) => (
            <AuctionItem auction={auction} key={auction._id} />
          ))}
      </div>
    </main>
  );
};

export default AuctionList;
