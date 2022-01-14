import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Layout = ({ children, title = "Frothby's Art Auction" }) => {
  return (
    <div className='h-screen w-screen flex flex-col justify-between items-center '>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header />
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme='dark'
      />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
