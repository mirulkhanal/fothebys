import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Banner from '../ErrorBanner';
import { toast } from 'react-toastify';
import ArtItem from './ArtItem';
const ArtList = () => {
  const { arts, error } = useSelector((state) => state.artsFromAuction);

  useEffect(() => {
    toast.error(error);
  }, [error]);

  return (
    <>
      <main>
        <h1>Current Auction Catalogue</h1>
        <div className='msg-container'>
          {arts && arts.length === 0 && (
            <Banner message={'No art found for this auction'} />
          )}
        </div>
        <div className='auction-container'>
          {arts &&
            arts.map((auction) => <ArtItem art={auction} key={auction._id} />)}
        </div>
      </main>
    </>
  );
};

export default ArtList;
