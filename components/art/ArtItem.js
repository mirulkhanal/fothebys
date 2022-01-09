import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ArtItem = ({ art }) => {
  return (
    <div className='auction-lot' key={art._id}>
      <h2 className='pb-3'>{art.title}</h2>

      <div className='auction-image'>
        <Image src={art.image_url} alt='' width={250} height={150} />
      </div>
      <div className='py-2'>
        <h2>Artist: {art.artist_name}</h2>
        <h3>Price: &pound;{art.price}</h3>
      </div>
      <Link href={`/auction/${art._id}`}>
        <a className='view-btn'>View details</a>
      </Link>
    </div>
  );
};

export default ArtItem;
