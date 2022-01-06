import Image from 'next/image';
import Home from '../components/Home';
import Layout from '../components/layouts/Layout';

export default function Index() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
