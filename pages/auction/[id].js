import Layout from '../../components/layouts/Layout';
import { wrapper } from '../../redux/store';
import { getAuctionArts } from '../../redux/actions/auctionActions';
import ArtList from '../../components/art/ArtList';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const AuctionCatalogue = () => {
  const { arts, error } = useSelector((state) => state.artsFromAuction);

  useEffect(() => {
    toast.error(error);
  }, [error]);

  return (
    <Layout>
      <ArtList arts={arts} />
    </Layout>
  );
};

export default AuctionCatalogue;
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, params }) => {
      await store.dispatch(getAuctionArts(req, params.id));
    }
);
