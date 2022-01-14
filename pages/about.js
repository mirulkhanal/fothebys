import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layouts/Layout';
import { AiTwotoneMail } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import { ImTwitter } from 'react-icons/im';
export default function Index() {
  return (
    <Layout>
      <div className='flex flex-col w-1/2 gap-24 shadow-2xl h-1/2 rounded-3xl bg-primary-white'>
        <h1 className='my-4 text-3xl font-semibold text-center'>About Us</h1>
        <div className='flex flex-col text-center gap-y-4'>
          Fotheby’s is an international auction house specialising in the sale
          of fine art.
        </div>
      </div>
    </Layout>
  );
}
