import React from 'react';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { userDatas } from "./../../data"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import { Link } from 'react-router-dom';

export default function UsersList() {
    const [usersData, setUsersData] = useState(userDatas);
    const delUser = userId => {
        setUsersData(prevUsers => prevUsers.filter(user => user.id !== userId))
    }

    const columns = [
        {
            field: "id",
            headerName: 'ID',
            width: 90,
        },
        {
            field: "user",
            headerName: 'User',
            width: 200,
            renderCell: (params) => {
                return (
                    <>
                        <Link to="/">
                            <div className='flex items-center gap-2'>
                                <img className='w-11 h-11 rounded-full' src={params.row.avatar} alt="" />
                                <p className='text-black text-md'>{params.row.username}</p>
                            </div>
                        </Link>
                    </>
                )
            }
        },
        {
            field: "email",
            headerName: 'Email',
            width: 200,
        },
        {
            field: "status",
            headerName: 'Status',
            width: 120,
        },
        {
            field: "transaction",
            headerName: 'Transaction',
            width: 160,
        },
        {
            field: "Action",
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <div className="flex gap-5 items-center outline-none">
                            <Link to={`/user/${params.row.id}`}>
                                <button>Edit</button>
                            </Link>
                            <DeleteOutlineOutlinedIcon
                            className='text-red-600 cursor-pointer'
                            onClick={() => delUser(params.row.id)}
                            />
                        </div>
                    </>
                )
            }
        },

    ]
    return (
        <>
            <DataGrid
                rows={usersData}
                columns={columns}
                pageSizeOptions={2}
                key="id"
                disableRowSelectionOnClick
            />
        </>
    )
}
