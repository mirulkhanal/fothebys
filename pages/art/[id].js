import Layout from '../../components/layouts/Layout';
import ArtDetails from '../../components/art/ArtDetails';
import axios from 'axios';
const ArtDetailsPage = ({ art }) => {
  console.log('Art object');
  console.log(art);
  return (
    <Layout>
      <ArtDetails art={art} />
    </Layout>
  );
};

export default ArtDetailsPage;
export const getServerSideProps = async (context) => {
  const response = await axios.get(
    `http://localhost:3000/api/art/${context.params.id}`
  );

  return {
    props: {
      art: response.data.art,
    },
  };
};
