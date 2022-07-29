import React from 'react'
import SideBar from "../../components/sideBar/SideBar"
import './home.scss'

function Home() {
  return (
    <div className='home'>
      <SideBar />
      <div className="homeContainer"></div>
    </div>
  )
}

export default Home;
