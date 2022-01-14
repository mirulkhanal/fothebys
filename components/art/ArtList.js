import React, { useEffect } from 'react';
import Banner from '../ErrorBanner';
import ArtItem from './ArtItem';
import { FcSearch } from 'react-icons/fc';
const ArtList = ({ arts }) => {
  return (
    <>
      <main>
        <h1 className='absolute top-24'>All lot items</h1>

        <div className='msg-container'>
          {arts && arts.length === 0 && <Banner message={'No art found'} />}
        </div>
        <div className='auction-container items-center flex h-full w-full'>
          {arts && arts.map((art) => <ArtItem art={art} key={art._id} />)}
        </div>
      </main>
    </>
  );
};

export default ArtList;
