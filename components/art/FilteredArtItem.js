import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const FilteredArtItem = ({ art, auctionID }) => {
  const router = useRouter();
  const handleAddArt = async () => {
    try {
      await axios.post(`/api/auction/${auctionID}/arts/add`, {
        art_id: art._id,
      });
      router.push(`/admin/auctions/${auctionID}`);
    } catch (error) {
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        console.log(error);
      }
    }
  };
  return (
    <div className='auction-lot' key={art._id}>
      <h2 className='pb-3'>{art.title}</h2>

      <div className='auction-image'>
        {art.image_url ? (
          <Image src={art.image_url.url} alt='' width={250} height={150} />
        ) : (
          ''
        )}
      </div>
      <div className='py-2'>
        <h2>Artist: {art.artist_name}</h2>
        <h3>Price: &pound;{art.price}</h3>
      </div>
      <button
        className='px-5 bg-primary-red text-primary-white-2 py-2 rounded-lg'
        type='submit'
        onClick={handleAddArt}>
        Add lot to auction
      </button>
    </div>
  );
};

export default FilteredArtItem;
