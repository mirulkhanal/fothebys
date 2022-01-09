import React from 'react';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <div className='cta-container'>
      <Link href='/login'>
        <a className='cta-btn'>Login</a>
      </Link>
      <Link href='/register'>
        <a className='cta-btn'>Signup</a>
      </Link>
    </div>
  );
};

export default CallToAction;
