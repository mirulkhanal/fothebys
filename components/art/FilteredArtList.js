import React from 'react';
import Banner from '../ErrorBanner';
import FilteredArtItem from './FilteredArtItem';
const FilteredArtList = ({ arts, auctionID }) => {
  return (
    <>
      <main>
        <h1>Add arts to auction</h1>
        <div className='msg-container'>
          {arts && arts.length === 0 && <Banner message={'No art found'} />}
        </div>
        <div className='auction-container'>
          {arts &&
            arts.map((art) => (
              <FilteredArtItem art={art} key={art._id} auctionID={auctionID} />
            ))}
        </div>
      </main>
    </>
  );
};

export default FilteredArtList;
