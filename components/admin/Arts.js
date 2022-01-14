import Link from 'next/link';
import React, { useEffect, useMemo } from 'react';
import ArtsTable from '../frugal/ArtsTable';
export const artColumns = [
  {
    Header: 'ID',
    accessor: '_id',
    show: false,
  },
  {
    Header: 'Artist Name',
    accessor: 'artist_name',
  },
  {
    Header: 'Year Created',
    accessor: 'year_created',
  },
  {
    Header: 'Title',
    accessor: 'title',
  },
  {
    Header: 'Classification',
    accessor: 'classification',
  },
  {
    Header: 'Category',
    accessor: 'category',
  },
  {
    Header: 'Height',
    accessor: 'height',
  },
  {
    Header: 'Width',
    accessor: 'width',
  },
  {
    Header: 'Depth',
    accessor: 'depth',
  },
  {
    Header: 'Weight',
    accessor: 'weight',
  },
  {
    Header: 'Price',
    accessor: 'price',
  },
  {
    Header: 'Material',
    accessor: 'material',
  },
  {
    Header: 'Framed',
    accessor: 'framed',
    show: false,
  },
  {
    Header: 'Medium',
    accessor: 'medium',
  },
  {
    Header: 'Bid Amount',
    accessor: 'bid_amount',
    show: false,
  },
  {
    Header: 'Archived',
    accessor: 'archived',
    show: false,
  },
];
const Arts = ({ arts }) => {
  return (
    <div className='h-full w-full flex flex-col items-center'>
      <Link href='/admin/arts/new'>
        <a className='view-btn my-5 absolute left-10 '>Create a lot piece</a>
      </Link>
      {arts && arts.length > 0 && (
        <ArtsTable columns={artColumns} data={arts} />
      )}
    </div>
  );
};

export default Arts;
