import React, { useEffect, useState } from 'react';
import NewArt from '../../../components/admin/NewArt';
import Layout from '../../../components/layouts/Layout';

const NewArtPage = () => {
  return (
    <Layout title="Add art to database | Fotheby's Auction House">
      <NewArt />
    </Layout>
  );
};

export default NewArtPage;
