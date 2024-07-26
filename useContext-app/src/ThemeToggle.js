import React, { useContext } from 'react'
import { AppContext } from './ThemeContext'
import { GoSun } from 'react-icons/go';
import { BsMoonStars } from 'react-icons/bs';

function ThemeToggle() {
    const {theme, toggleTheme} = useContext(AppContext);

  return (
    <div>
        <div >
        <button className='light-dark-btn' onClick={toggleTheme} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '2rem' }}>
        {theme === 'light' ? <BsMoonStars style={{ color: 'black' }} /> : <GoSun style={{ color: 'black' }} />}
      </button>
        </div>
      
    </div>
  )
}

export default ThemeToggle
