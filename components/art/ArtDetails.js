import Image from 'next/image';
import Link from 'next/link';
const ArtDetails = ({ art }) => {
  return (
    <>
      <div className='auction-lot-title'>
        <h1 className='text-center py-2'>{art.title}</h1>
      </div>
      <div className='flex justify-between w-screen pt-5 px-16'>
        <div className='auction-lot-image-container'>
          {art.image_url && (
            <Image
              src={art.image_url.url}
              alt='the image for egyptian art'
              width={700}
              height={500}
            />
          )}
        </div>
        <div className='w-96 flex flex-col gap-9'>
          <div className='h-fit w-full leading-8 rounded-3xl border-2 shadow-2xl'>
            <h2 className='text-center font-extrabold'>
              {art.year_created} AD
            </h2>
            <h3 className='description-label'>
              <span>Artist: </span>
              {art.artist_name}
            </h3>
            <h3 className='description-label'>
              <span>Category: </span>
              {art.category}
            </h3>
            <h3 className='description-label'>
              <span>Price: </span>
              &pound; {art.price}
            </h3>
            <h3 className='description-label'>
              <span>Material: </span>
              {art.material}
            </h3>
            <div className='auction-lot-bid mx-auto w-max my-3 flex justify-items-center items-center'>
              <Link href='#place-bid'>
                <a className='outline-none shadow-lg rounded-md px-8 py-2 text-lg font-extrabold text-primary-white bg-primary-red border-primary-black'>
                  Place bid
                </a>
              </Link>
            </div>
          </div>
          <div>optional</div>
        </div>
      </div>
    </>
  );
};

export default ArtDetails;
