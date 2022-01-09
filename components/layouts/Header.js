import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import fothebyLogo from '../../public/logo.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthUserAction } from '../../redux/actions/userActions';
import { MdLogin } from 'react-icons/md';
import CallToAction from '../frugal/CallToAction';
import AuthUserDetails from '../frugal/AuthUserDetails';
import { signOut } from 'next-auth/react';
const Header = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);
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
        <Link href='/search'>
          <a className=''>Search</a>
        </Link>
        <Link href='/'>
          <a className=''>Contact</a>
        </Link>
        <Link href='/'>
          <a className=''>About</a>
        </Link>
      </div>
      {(user && <AuthUserDetails user={user} signOut={signOut} />) || (
        <CallToAction />
      )}
    </nav>
  );
};

export default Header;
