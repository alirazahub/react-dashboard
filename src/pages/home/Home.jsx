import React from 'react'
import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import NavBar from '../../components/navBar/NavBar';
import SideBar from "../../components/sideBar/SideBar"
import Table from '../../components/table/Table';
import Widget from '../../components/widget/Widget';
import './home.scss'

function Home() {
  return (
    <div className='home'>
      <SideBar />
      <div className="homeContainer">
        <NavBar />
        <div className="widgets">
          <Widget type = 'user' />
          <Widget type = 'order' />
          <Widget type = 'earning' />
          <Widget type = 'balance' />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Home;
