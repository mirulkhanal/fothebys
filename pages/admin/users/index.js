import React, { useEffect } from 'react';
import Layout from '../../../components/layouts/Layout';
import { getSession } from 'next-auth/react';
import axios from 'axios';
import UserTable from '../../../components/frugal/UserTable';
const AdminArts = ({ users }) => {
  return (
    <Layout title="Arts | Fotheby's Auction House">
      {users && <UserTable data={users} columns={userColumns} />}
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
  const response = await axios.get('http://localhost:3000/api/admin/users');

  return {
    props: { session, users: response.data.users },
  };
}

const userColumns = [
  {
    Header: 'ID',
    accessor: '_id',
    show: false,
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Email',
    accessor: 'email',
  },
  {
    Header: 'Role',
    accessor: 'role',
  },
  {
    Header: 'Verified',
    accessor: 'verified',
    show: false,
  },
  {
    Header: 'Address',
    accessor: 'address',
  },
  {
    Header: 'Phone Number',
    accessor: 'phone',
  },
];
