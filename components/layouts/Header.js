import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import fothebyLogo from '../../public/logo.jpg';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearErrors,
  getAuthUserAction,
} from '../../redux/actions/userActions';
import CallToAction from '../frugal/CallToAction';
import AuthUserDetails from '../frugal/AuthUserDetails';
import { signOut } from 'next-auth/react';
const Header = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.authUser);

  useEffect(() => {
    dispatch(getAuthUserAction());
  }, [dispatch]);
  return (
    <nav>
      <div className='branding'>
        <Image
          src={fothebyLogo}
          className='logo'
          alt='Fotheby auction house logo'
        />
      </div>
      <div className='nav-links'>
        <Link href='/'>
          <a className=''>Home</a>
        </Link>
        <Link href='/auction'>
          <a className=''>Auction</a>
        </Link>
        <Link href='/art'>
          <a className=''>Art lot</a>
        </Link>
        <Link href='/search'>
          <a className=''>Search</a>
        </Link>
        <Link href='/contact'>
          <a className=''>Contact</a>
        </Link>
        <Link href='/about'>
          <a className=''>About</a>
        </Link>
      </div>
      {(user && <AuthUserDetails user={user} signOut={signOut} />) ||
        (!loading && <CallToAction />) ||
        loading}
    </nav>
  );
};

export default Header;
