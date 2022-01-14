import Image from 'next/image';
import React from 'react';

const Home = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='py-4 text-2xl font-extrabold text-center'>
        {"Welcome to Fotheby's Auction house"}
      </h1>
      <div className='flex items-center justify-center w-1/2 py-4 shadow-2xl bg-primary-white-2 rounded-3xl'>
        <Image src='/art-3.jpg' className='' width={1200} height={500} />
      </div>
      <div className='flex w-full gap-10 mx-auto text-center'>
        <p className='px-4 my-4 shadow-2xl rounded-2xl'>
          <span className='block m-4 text-2xl'>Company Directive</span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
          voluptates praesentium excepturi commodi quod illum, rem, enim facere
          cum hic, qui aliquam distinctio dolores obcaecati! Molestiae, eveniet.
          Aliquid optio nulla blanditiis placeat eius inventore debitis
          temporibus,
        </p>
        <p className='px-4 my-4 shadow-2xl rounded-2xl'>
          <span className='block m-4 text-2xl'>Our aim</span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
          voluptates praesentium excepturi commodi quod illum, rem, enim facere
          cum hic, qui aliquam distinctio dolores obcaecati! Molestiae, eveniet.
          Aliquid optio nulla blanditiis placeat eius inventore debitis
          temporibus, ipsa qui minima delectus, eveniet tempora dicta facere
          culpa eaque.
        </p>
      </div>
    </div>
  );
};

export default Home;
