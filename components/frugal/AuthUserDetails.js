import { set } from 'mongoose';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const AuthUserDetails = ({ user, signOut }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className='flex gap-10 justify-end items-center '
      onClick={(e) => setShow((prevState) => !prevState)}>
      <h2 className='text-xl font-medium text-primary-white-2'>{user.name}</h2>
      {user.profile_image && user.profile_image.url && (
        <Image
          src={user.profile_image && user.profile_image.url}
          alt={user.name}
          width={50}
          height={50}
          className='rounded-full cursor-pointer'
        />
      )}
      <div
        className={`${
          show ? '' : 'hidden'
        } absolute flex flex-col bg-primary-white h-auto mt-60 rounded-2xl shadow-2xl w-2/12 items-center justify-items-center`}>
        <Link href='/'>
          <a className='dropdown-links'>My biddings</a>
        </Link>
        <Link href='/'>
          <a className='dropdown-links'>My Profile</a>
        </Link>
        <Link href='/'>
          <a className='dropdown-links' onClick={() => signOut()}>
            Logout
          </a>
        </Link>
      </div>
    </div>
  );
};

export default AuthUserDetails;
