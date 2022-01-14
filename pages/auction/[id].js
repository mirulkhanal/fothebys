import Layout from '../../components/layouts/Layout';
import ArtList from '../../components/art/ArtList';
import axios from 'axios';
const AuctionCatalogue = ({ arts }) => {
  // console.log(hello);
  return (
    <Layout>
      {/* {hello} */}
      <ArtList arts={arts} />
    </Layout>
  );
};

export default AuctionCatalogue;
export const getServerSideProps = async (context) => {
  const response = await axios.get(
    `http://localhost:3000/api/auction/${context.params.id}/arts`
  );

  return {
    props: {
      arts: response.data.arts,
    },
  };
};
