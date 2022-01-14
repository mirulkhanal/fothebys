import UpdateAuction from '../../../../components/admin/UpdateAuction';
import Layout from '../../../../components/layouts/Layout';
import ArtsFromAuctionTable from '../../../../components/frugal/ArtsFromAuctionTable';
import { artColumns } from '../../../../components/admin/Arts';
import axios from 'axios';
const UpdateAuctionPage = ({ arts, auction_id }) => {
  console.log(arts);
  return (
    <Layout>
      <UpdateAuction />
      {arts && (
        <ArtsFromAuctionTable
          columns={artColumns}
          arts={arts}
          id={auction_id}
        />
      )}
    </Layout>
  );
};

export default UpdateAuctionPage;
export const getServerSideProps = async (context) => {
  const response = await axios.get(
    `http://localhost:3000/api/auction/${context.params.id}/arts`
  );
  return {
    props: { arts: response.data.arts, auction_id: context.params.id },
  };
};
