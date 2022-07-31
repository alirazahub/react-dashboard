import React from 'react'
import './datatable.scss'
import {DataGrid}  from '@mui/x-data-grid';
import { userColumns, userRows} from './dataTableData';
import {Link} from 'react-router-dom'

function DataTable() {
    const actionColumn=[{
        field: 'action',
        headerName: 'Action',
        width: 200,
        renderCell: () => {
            return (
                <div className="cellAction">
                    <Link to="/users/test">
                    <button className="viewButton">View</button>
                    </Link>
                    <button className="deleteButton">Delete</button>
                </div>
            )
        }
    }]
    return (
        <div className='datatable'>
            <div className="datatableTitle">
                Add New User
                <Link className='link' to="/users/new"> Add New</Link>
            </div>
                <DataGrid
                className='datagrid'
                    rows={userRows}
                    columns={userColumns.concat(actionColumn)}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                />
        </div>
    )
}

export default DataTable