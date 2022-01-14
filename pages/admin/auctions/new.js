import React, { useEffect, useState } from 'react';
import NewAuction from '../../../components/admin/NewAuction';
import Layout from '../../../components/layouts/Layout';

const NewAuctionPage = () => {
  return (
    <Layout title="Auctions | Fotheby's Auction House">
      <NewAuction />
    </Layout>
  );
};

export default NewAuctionPage;
