import Link from 'next/link';
import React, { useEffect, useMemo } from 'react';
import { useTable } from 'react-table';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import axios from 'axios';
const ArtsTable = ({ columns, data }) => {
  const router = useRouter();
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/admin/users/${id}`
      );
      router.reload(window.location.pathname);
    } catch (error) {
      toast.error(error);
    }
  };
  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: 'verifiedp',
        Header: 'Verified',
        Cell: ({ row }) => {
          if (row.values) {
            return (
              <div className=' w-11/12 flex items-center justify-between px-20'>
                {row.values.verified ? <span>Yes</span> : <p>No</p>}
              </div>
            );
          } else {
            return <p>no values</p>;
          }
        },
      },
      {
        id: 'actions2',
        Header: 'Actions',
        Cell: ({ row }) => (
          <div className=' flex items-center justify-between'>
            <button
              className=' text-3xl'
              onClick={(e) => handleDelete(row.values._id)}>
              <AiFillDelete className='text-center w-full text-primary-red' />
            </button>
          </div>
        ),
      },
    ]);
  };
  const table = useTable(
    {
      columns,
      data,
      initialState: {
        hiddenColumns: columns.map((column) => {
          if (column.show === false) return column.accessor || column.id;
        }),
      },
    },
    tableHooks
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    table;
  return (
    <table className='w-full mt-24' {...getTableProps()}>
      <thead className='bg-primary-red p-2'>
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
                  className='border text-center '
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
  );
};

export default ArtsTable;
