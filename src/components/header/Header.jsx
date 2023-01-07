import React from 'react'
import { Box, Button, useTheme } from '@mui/material'
import { useState } from 'react'

const Header = () => {
  const theme = useTheme()
  const [navbar, setNavbar] = useState(false)
  const changeBackground = () => {
    if (window.scrollY > 5) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <Box
      sx={{
        [theme.breakpoints.down('sm')]: {
          px: '1rem',
        },
      }}
      component='header'
      className={navbar ? 'header active' : 'header'}
    >
      <div className='header__shell'>
        <div>
          <img
            src={require('../../assets/logo/NG.png')}
            alt='logo'
            className='header__logo'
          />
        </div>
        <nav>
          <ul className={clicked ? 'menu-list' : 'menu-list close'}>
            <li>
              <a href='/' className='nav__item'>
                Home
              </a>
            </li>
            <li>
              <a href='#business' className='nav__item'>
                Business
              </a>
            </li>
            <li>
              <a href='#about' className='nav__item'>
                About
              </a>
            </li>
            <Button
              className='nav__item'
              variant='contained'
              href='#contact-us'
              disableElevation
              color='primary'
            >
              Contact Us
            </Button>
          </ul>
        </nav>
        <div className='menu-icon' onClick={handleClick}>
          <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </div>
    </Box>
  )
}

export default Header
