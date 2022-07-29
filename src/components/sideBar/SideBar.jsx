import React from 'react'
import './sidebar.scss'

function SideBar() {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">AliRaza</span>
        </div>
        <div className="center">
            <ul>
                <li>
                    <span>Dashboard</span>
                </li>
                <li>
                    <span>Dashboard</span>
                </li>
                <li>
                    <span>Dashboard</span>
                </li>
                <li>
                    <span>Dashboard</span>
                </li>
            </ul>
        </div>
        <div className="bottom">Modes</div>
    </div>
  )
}

export default SideBar