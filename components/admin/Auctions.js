import Link from 'next/link';
import React, { useEffect, useMemo } from 'react';
import Table from '../frugal/Table';
const Auctions = ({ auctions }) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Auction ID',
        accessor: '_id',
      },
      {
        Header: 'Title',
        accessor: 'title',
      },
      {
        Header: 'Date',
        accessor: 'date',
      },
      {
        Header: 'Location',
        accessor: 'location',
      },
      {
        Header: 'Archived',
        accessor: 'archived',
        show: false,
      },
    ],
    []
  );
  return (
    <div className='flex flex-col items-center w-full h-full '>
      <Link href='/admin/auctions/new'>
        <a className='mt-10 view-btn left-10 '>Create an Auction</a>
      </Link>
      {auctions && <Table columns={columns} data={auctions} />}
    </div>
  );
};

export default Auctions;
