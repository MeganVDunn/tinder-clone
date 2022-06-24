import React from 'react'
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';

function Header() {
  return (
    <div className='header'>
        
        <IconButton>
            <PersonIcon  fontSize='large' className='header_icon' />
        </IconButton>

        <img
            className='header_logo' 
            src="https://www.citypng.com/public/uploads/preview/-11595270396ei6vchptvb.png"
            alt=""
        />
        
    </div>
  )
}

export default Header