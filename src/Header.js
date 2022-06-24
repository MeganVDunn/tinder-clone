import React from 'react'
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';

function Header() {
  return (
    <div className='header'>
        <h2>I am a header</h2>
        <PersonIcon  fontSize='large' className='header-icon' />
    </div>
  )
}

export default Header