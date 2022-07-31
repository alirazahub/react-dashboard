import React from 'react'
import SideBar from '../../components/sideBar/SideBar'
import NavBar from '../../components/navBar/NavBar'
import './list.scss'
import DataTable from '../../components/dataTable/DataTable'

function List() {
  return (
    <div className='list'>
      <SideBar />

      <div className="listContainer">
        <NavBar />
        <DataTable />
      </div>
    </div>
  )
}

export default List