import React, { useEffect } from 'react';
import Layout from '../../components/layouts/Layout';
import { wrapper } from '../../redux/store';
import { getAuctions } from '../../redux/actions/auctionActions';
import AuctionList from '../../components/auction/AuctionList';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const AuctionPage = () => {
  const router = useRouter();
  const { auctions, error } = useSelector((state) => state.allAuctions);
  const { location } = router.query;

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <Layout title="Auctions | Fotheby's Auction House">
      <AuctionList auctions={auctions} location={location || ''} />
    </Layout>
  );
};

export default AuctionPage;
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, query }) => {
      await store.dispatch(getAuctions(req, query.location));
    }
);
