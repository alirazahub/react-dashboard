import React from 'react'
import './featured.scss'
import 'react-circular-progressbar/dist/styles.css'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import {CircularProgressbar} from 'react-circular-progressbar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

function Featured() {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertOutlinedIcon fontSize='small'/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={70} text ='70%' strokeWidth={4}/>
            </div>
            <p className="title">Total Sales made today</p>
            <p className="amount">$420</p>
            <p className="desc">
              Previous transaction processing. Last payments may not be included.
            </p>
            <div className="summary">
              <div className="item">
                <div className="itemTitle">Target</div>
                <div className="itemResult negative">
                  <KeyboardArrowDownIcon fontSize='small'/>
                  <div className="resultAmount">$12.4k</div>
                </div>
              </div>
              <div className="item">
                <div className="itemTitle">Last Week</div>
                <div className="itemResult positive">
                  <KeyboardArrowUpOutlinedIcon fontSize='small'/>
                  <div className="resultAmount">$12.4k</div>
                </div>
              </div>
              <div className="item">
                <div className="itemTitle">Last Month</div>
                <div className="itemResult positive">
                  <KeyboardArrowUpOutlinedIcon fontSize='small'/>
                  <div className="resultAmount">$12.4k</div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Featured