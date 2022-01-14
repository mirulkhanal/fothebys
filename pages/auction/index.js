import React, { useEffect, useMemo } from 'react';
import Layout from '../../components/layouts/Layout';
import { wrapper } from '../../redux/store';
import { clearErrors, getAuctions } from '../../redux/actions/auctionActions';
import AuctionList from '../../components/auction/AuctionList';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const AuctionPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { auctions, loading, error } = useSelector(
    (state) => state.allAuctions
  );
  const { location } = router.query;

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [error, dispatch]);

  return (
    <Layout title="Auctions | Fotheby's Auction House">
      {loading ? (
        'Loading'
      ) : (
        <AuctionList auctions={auctions} location={location || ''} />
      )}
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
