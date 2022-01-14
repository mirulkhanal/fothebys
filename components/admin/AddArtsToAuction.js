import React, { useEffect } from 'react';
import FilteredArtList from '../art/FilteredArtList';

const AddArtsToAuction = ({ arts, auctionID }) => {
  return (
    <>
      <FilteredArtList arts={arts} auctionID={auctionID} />
    </>
  );
};

export default AddArtsToAuction;
