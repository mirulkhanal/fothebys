import React, { useEffect, useMemo } from 'react';
import Layout from '../../components/layouts/Layout';
import { wrapper } from '../../redux/store';
import { clearErrors, getArts } from '../../redux/actions/artActions';
import ArtList from '../../components/art/ArtList';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const ArtPage = () => {
  const dispatch = useDispatch();
  const { arts, error } = useSelector((state) => state.allArts);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [error, dispatch]);

  return (
    <Layout title="Arts | Fotheby's Auction House">
      {arts && <ArtList arts={arts} title={'All arts in the database'} />}
    </Layout>
  );
};

export default ArtPage;
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, query }) => {
      await store.dispatch(
        getArts(query.title, query.artist_name, query.price)
      );
      // console.debug(query.title, query.artist_name, query.price);
    }
);
