import React from 'react';
import Login from '../components/auth/Login';
import Layout from '../components/layouts/Layout';

const login = () => {
  return (
    <Layout title='Login'>
      <Login />
    </Layout>
  );
};

export default login;
