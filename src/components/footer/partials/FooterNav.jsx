import { Box, useTheme } from '@mui/material'

const FooterNav = () => {
  const theme = useTheme()
  return (
    <Box>
      <Box
        component='ul'
        sx={{
          color: '#000',
          fontSize: ' 1.125rem',
          fontWeight: '500',
          display: 'flex',
          alignItems: 'left',
          padding: '5px 10px',
          textDecoration: 'none',
          [theme.breakpoints.down('md')]: {
            display: 'flex',
          },
        }}
        className='nav'
      >
        <Box
          component='li'
          sx={{
            marginBottom: '1rem',
            [theme.breakpoints.down('md')]: {
              display: 'flex',
              marginLeft: '1rem',
            },
          }}
        >
          <Box
            component='a'
            sx={{
              color: '#000',
              padding: '5px 10px',
              textAlign: 'center',
              '&:hover': {
                color: '#1068ee',
              },
            }}
            href='/'
            className='nav__item'
          >
            Home
          </Box>
        </Box>
        <Box
          component='li'
          sx={{
            marginBottom: '1rem',
            [theme.breakpoints.down('md')]: {
              display: 'flex',
              marginLeft: '1rem',
            },
          }}
        >
          <Box
            component='a'
            sx={{
              color: '#000',
              padding: '5px 10px',
              textAlign: 'center',
              '&:hover': {
                color: '#1068ee',
              },
            }}
            href='/'
            className='nav__item'
          >
            Business
          </Box>
        </Box>
        <Box
          component='li'
          sx={{
            marginBottom: '1rem',
            [theme.breakpoints.down('md')]: {
              display: 'flex',
              marginLeft: '1rem',
            },
          }}
        >
          <Box
            component='a'
            sx={{
              color: '#000',
              padding: '5px 10px',
              textAlign: 'center',
              '&:hover': {
                color: '#1068ee',
              },
            }}
            href='/'
            className='nav__item'
          >
            About
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default FooterNav
