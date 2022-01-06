import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, title = "Frothby's Art Auction" }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header />
      {/* {children} */}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
