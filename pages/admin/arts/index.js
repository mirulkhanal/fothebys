import React, { useEffect } from 'react';
import Layout from '../../../components/layouts/Layout';
import { clearErrors, getAdminArts } from '../../../redux/actions/artActions';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Arts from '../../../components/admin/Arts';
import { getSession } from 'next-auth/react';

const AdminArts = () => {
  const dispatch = useDispatch();
  const { arts, error } = useSelector((state) => state.allArts);

  useEffect(() => {
    dispatch(getAdminArts());
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error]);

  return (
    <Layout title="Arts | Fotheby's Auction House">
      {arts && <Arts arts={arts} />}
    </Layout>
  );
};

export default AdminArts;

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
