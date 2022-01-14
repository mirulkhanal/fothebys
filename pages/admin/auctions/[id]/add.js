// import UpdateAuction from '../../../../components/admin/UpdateAuction';
import Layout from '../../../../components/layouts/Layout';
import AddArtsToAuction from '../../../../components/admin/AddArtsToAuction';
import axios from 'axios';
import { toast } from 'react-toastify';
const add = ({ arts, refID }) => {
  return (
    <Layout className='justify-evenly'>
      <AddArtsToAuction arts={arts} auctionID={refID} />
    </Layout>
  );
};

export default add;
export const getServerSideProps = async (context) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/art/`);
    return {
      props: {
        arts: response.data.arts,
        refID: context.params.id,
      },
    };
  } catch (error) {
    toast.error(error.response.data.message);
    return {
      props: {
        error: error,
        refID: context.params.id,
      },
    };
  }
};
