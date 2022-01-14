import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layouts/Layout';
import { AiTwotoneMail } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import { ImTwitter } from 'react-icons/im';
export default function Index() {
  return (
    <Layout>
      <div className='h-1/2 w-1/2 rounded-3xl flex flex-col gap-24 bg-primary-white shadow-2xl'>
        <h1 className='text-center text-3xl my-4 font-semibold'>
          Contact Details
        </h1>
        <div className='flex flex-col gap-y-4 text-center'>
          <Link href={`mailto:${process.env.fothebyEmail}`}>
            <a className='flex justify-center items-center gap-4 text-2xl'>
              <span>Email Us</span>
              <AiTwotoneMail className='text-email-green' />
            </a>
          </Link>
          <Link href=''>
            <a className='flex justify-center items-center gap-4 text-2xl'>
              <span>Call Us</span>
              <FiPhoneCall className='text-primary-red' />
            </a>
          </Link>
          <Link href=''>
            <a className='flex justify-center items-center gap-4 text-2xl'>
              <span>Tweet @ us</span>
              <ImTwitter className='text-primary-blue' />
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
