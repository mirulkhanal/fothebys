import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {
  updateAuction,
  clearErrors,
  getAuctionDetails,
} from '../../redux/actions/auctionActions';
import { UPDATE_AUCTION_RESET } from '../../redux/actions/actionTypes';
import { useRouter } from 'next/router';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
const UpdateAuction = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { error, loading, success } = useSelector((state) => state.auction);
  const { error: auctionDetailsError, auction } = useSelector(
    (state) => state.auctionDetails
  );
  const [title, setTitle] = useState();
  const [date, setDate] = useState(new Date());
  const [location, setLocation] = useState('');

  useEffect(() => {
    if (auction && auction._id !== router.query.id) {
      dispatch(getAuctionDetails(router.query.id));
    } else {
      setTitle(auction.title);
      setDate(new Date(auction.date));
      setLocation(auction.location);
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (auctionDetailsError) {
      toast.error(auctionDetailsError);
      dispatch(clearErrors());
    }
    if (success) {
      router.push('/admin/auctions');
      dispatch({ type: UPDATE_AUCTION_RESET });
    }
  }, [router, success, dispatch, error, auction, auctionDetailsError]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateAuction(router.query.id, {
        title,
        date,
        location,
      })
    );
  };
  return (
    // <div className='h-full w-full flex flex-col items-center'>
    <form
      onSubmit={submitHandler}
      className='flex flex-col h-1/2 w-5/12 justify-between items-center rounded-3xl  p-4 m-4 shadow-2xl'>
      <h1 className='text-2xl font-extrabold text-primary-black'>
        Add Auction Details
      </h1>
      <input
        type='text'
        placeholder='Auction title'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className='register-input'
      />

      <input
        type='text'
        placeholder='Auction Location'
        onChange={(e) => setLocation(e.target.value)}
        value={location}
        className='register-input'
      />
      <label className='rounded-lg px-4 py-2 cursor-pointer flex items-center bg-primary-red text-primary-white font-medium'>
        <DatePicker
          selected={new Date(date)}
          onChange={(newDate) => setDate(newDate)}
          className='rounded-xl w-9/12 outline-none text-primary-black text-center'
        />
        <span className='flex-grow w-full'>Pick Auction Date</span>
      </label>
      <button
        type='submit'
        className='rounded-lg px-4 py-2 cursor-pointer flex items-center gap-2 bg-primary-red text-primary-white font-medium'>
        Update
      </button>
    </form>
    // </div>
  );
};

export default UpdateAuction;
