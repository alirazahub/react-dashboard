import React from 'react'
import './sidebar.scss'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import {Link} from 'react-router-dom'

function SideBar() {
  return (
    <div className='sidebar'>
        <div className="top">
            <Link style={{textDecoration : 'none'}} to="/">
            <span className="logo">adminPanel</span>
            </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <Link style={{textDecoration : 'none'}} to="/">
                <li>
                    <DashboardOutlinedIcon className='icon' />
                    <span>Dashboard</span>
                </li>
                </Link>
                <p className="title">LISTS</p>
                <Link style={{textDecoration : 'none'}}  to="/users">
                <li>
                    <PersonOutlineOutlinedIcon className='icon' />
                    <span>Users</span>
                </li>
                    </Link>
                    <Link style={{textDecoration : 'none'}}  to="/products">
                <li>
                    <StoreOutlinedIcon className='icon' />
                    <span>Products</span>
                </li>
                </Link>
                <li>
                    <ViewStreamOutlinedIcon className='icon' />
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingOutlinedIcon className='icon' />
                    <span>Delivery</span>
                </li>
                <p className="title">USEFULL</p>
                <li>
                    <InsertChartOutlinedIcon className='icon' />
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsNoneOutlinedIcon className='icon' />
                    <span>Notification</span>
                </li>
                <p className="title">SERVICES</p>
                <li>
                    <HealthAndSafetyOutlinedIcon className='icon' />
                    <span>System Health</span>
                </li>
                <li>
                    <PsychologyOutlinedIcon className='icon' />
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsOutlinedIcon className='icon' />
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleOutlinedIcon className='icon' />
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className='icon' />
                    <span>Logout</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default SideBar