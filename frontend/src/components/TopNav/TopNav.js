import React from 'react';
import './TopNav.css';
import { Avatar, IconButton, Link } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';

function TopNav(props){
    return(
    <div className='TopNav'>
        <div className='TopNav_logo'>
            <Link to='/'>
                <img src = 'logo-stackoverflow.png' className='TopNav_logo_img'/>
            </Link>
        </div>

        <div className='TopNav_searchBar'>
            <input placeholder = "Search" type = "text"/>
            <IconButton>
                <SearchIcon/>
            </IconButton>
        </div>
        <div className='TopNav_options'>

            <IconButton>
                <Link to='/user-profile'>
                    <Avatar src = {props.avatar_src} className='TopNav_svg'/>
                </Link>
            </IconButton>

        </div>
        
    </div>
    );
}

export default TopNav;