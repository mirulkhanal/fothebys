import Link from 'next/link';
import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import { FaEdit } from 'react-icons/fa';
import { BsArchive } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
const Table = ({ columns, data }) => {
  const router = useRouter();
  const handleDelete = async (e, id) => {
    try {
      await axios.delete(`http://localhost:3000/api/auction/${id}`);
      router.reload(window.location.pathname);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const handleArchive = async (e, id, archived) => {
    try {
      const archivedState = !archived;
      await axios.put(
        `http://localhost:3000/api/auction/${id}`,
        {
          archived: archivedState,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      router.reload(window.location.pathname);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: 'archivedP',
        Header: 'Archived',
        Cell: ({ row }) => {
          if (row.values) {
            return (
              <div className=' w-11/12 flex items-center justify-between px-20'>
                {row.values.archived ? <span>Yes</span> : <p>No</p>}
              </div>
            );
          } else {
            return <p>no values</p>;
          }
        },
      },
      {
        id: 'actions',
        Header: 'Actions',
        Cell: ({ row }) => (
          <div className=' flex items-center justify-between px-5 gap-2'>
            <Link href={`/admin/auctions/${row.values._id}`}>
              <a className=' text-2xl'>
                <FaEdit className='text-center w-full text-dark-green' />
              </a>
            </Link>
            <button
              className=' text-3xl'
              onClick={(e) =>
                handleArchive(e, row.values._id, row.values.archived)
              }>
              <BsArchive className='text-center w-full text-primary-red' />
            </button>
            <button
              className=' text-3xl'
              onClick={(e) => handleDelete(e, row.values._id)}>
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
          if (column.show === false) return column.accessor;
        }),
      },
    },
    tableHooks
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    table;
  return (
    <table className='w-11/12 mt-24 table-fixed' {...getTableProps()}>
      <thead className='bg-primary-red p-2 border'>
        {headerGroups.map((headerGroup) => (
          <tr key={headerGroup.Header} {...headerGroup.getHeaderGroupProps()}>
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

export default Table;
