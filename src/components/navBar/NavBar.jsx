import React from 'react'
import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import NotificationsNoneOutlined from '@mui/icons-material/NotificationsNoneOutlined';

function NavBar() {
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="search">
              <input type="text" placeholder='search' />
              <SearchOutlinedIcon />
            </div>
            <div className="items">
              <div className="item">
                <LanguageOutlinedIcon className ='icon' />
                English
              </div>
              <div className="item">
                <DarkModeOutlinedIcon className ='icon' />
              </div>
              <div className="item">
                <NotificationsNoneOutlined className ='icon' />
                <div className="counter">1</div>
              </div>
              <div className="item">
                <ChatBubbleOutlineOutlinedIcon className ='icon' />
                <div className="counter">2</div>
              </div>
              <div className="item">
                <ListOutlinedIcon className ='icon' />
              </div>
              <div className="item">
                <img src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-businessman-user-avatar-free-vector-png-image_4827807.jpg" alt="Avatar" className='avatar' />
              </div>
            </div>
        </div>
      
    </div>
  )
}

export default NavBar
