import React, { useEffect } from 'react';
import Layout from '../../../components/layouts/Layout';
import {
  clearErrors,
  getAllAdminAuctions,
} from '../../../redux/actions/auctionActions';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Auctions from '../../../components/admin/Auctions';
import { getSession } from 'next-auth/react';

const AdminAuctions = () => {
  const dispatch = useDispatch();
  const { auctions, loading, error } = useSelector(
    (state) => state.allAuctions
  );
  useEffect(() => {
    dispatch(getAllAdminAuctions());
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error]);
  return (
    <Layout title="Auctions | Fotheby's Auction House">
      {auctions && <Auctions auctions={auctions} />}
    </Layout>
  );
};

export default AdminAuctions;
export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
