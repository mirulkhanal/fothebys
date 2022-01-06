import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import fothebyLogo from '../../public/logo.jpg';

const Header = () => {
  return (
    <nav>
      <div className='branding'>
        <Image
          src={fothebyLogo}
          className='logo'
          alt='Fotheby auction house logo'
        />
      </div>
      <div className=''>
        <Link href='/'>
          <a className=''>Home</a>
        </Link>
        <Link href='/'>
          <a className=''>Auction</a>
        </Link>
        <Link href='/'>
          <a className=''>Search</a>
        </Link>
        <Link href='/'>
          <a className=''>Contact</a>
        </Link>
        <Link href='/'>
          <a className=''>About</a>
        </Link>
      </div>
      <div className=''>
        <Link href='/login'>
          <a className=''>Login</a>
        </Link>
        <Link href='/signup'>
          <a className=''>Signup</a>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
