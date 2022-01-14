import Link from 'next/link';
import React from 'react';
import { useTable } from 'react-table';
import { AiFillDelete } from 'react-icons/ai';
import { useRouter } from 'next/router';
import axios from 'axios';
const ArtsFromAuctionTable = ({ arts, columns, id }) => {
  console.log('arts');
  console.log(arts);
  const router = useRouter();
  const handleDelete = async (artid) => {
    try {
      await axios.put(`/api/auction/${id}/arts`, {
        art_id: artid,
      });
      router.reload(window.location.pathname);
    } catch (error) {
      console.log(error);
    }
  };
  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: 'actions2',
        Header: 'Actions',
        Cell: ({ row }) => (
          <div className='flex items-center justify-between '>
            <a
              className='text-3xl '
              onClick={(e) => handleDelete(row.values._id)}>
              <AiFillDelete className='w-full text-center cursor-pointer text-primary-red' />
            </a>
          </div>
        ),
      },
    ]);
  };
  const tableInstance = useTable(
    {
      columns,
      data: arts,
    },
    tableHooks
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <>
      <Link href={`/admin/auctions/${id}/add`}>
        <a className='view-btn'>Add lot to this auction</a>
      </Link>
      <table className='w-full mt-24' {...getTableProps()}>
        <thead className='p-2 bg-primary-red'>
          {headerGroups.map((headerGroup) => (
            <tr
              className='border '
              key={headerGroup.Header}
              {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  className='border'
                  key={column.getHeaderProps()}
                  {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr className='border ' key={row.index}>
                {row.cells.map((cell) => (
                  <td
                    className='text-center border '
                    key={cell.value}
                    {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ArtsFromAuctionTable;
