import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className='bg-primary-red w-full h-fit flex items-center justify-center gap-10 text-primary-white-2'>
      <div className=''>&copy;Mirul Khanal {"Fotheby's Auction house"}</div>
      <div className='flex items-center justify-center'>
        <ul className='flex justify-center items-center'>
          <Link href={'https://github.com/mirulkhanal/fothebys'}>
            <a className='bg-primary-black text-white px-5 py-2'>Github</a>
          </Link>
          <Link href={'mailto:mirulkhanal@gmail.com'}>
            <a className='bg-email-green text-primary-white-2 px-5 py-2'>
              Email
            </a>
          </Link>
          <Link href={'https://twitter.com/mill_yeek'}>
            <a className='bg-primary-blue px-5 py-2 text-primary-white'>
              Twitter
            </a>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
