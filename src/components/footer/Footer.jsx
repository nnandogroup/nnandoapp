import { Box, Typography, useTheme } from '@mui/material'
import FooterNav from './partials/FooterNav'
import FooterIcons from './partials/FooterIcons'
import FooterForm from './partials/FooterForm'

const Footer = () => {
  const theme = useTheme()

  return (
    <>
      <Box
        component='footer'
        sx={{
          backgroundColor: 'secondary.main',
        }}
      >
        <Box
          sx={{
            maxWidth: '75rem',
            mx: 'auto',
            py: '2rem',
            [theme.breakpoints.down('lg')]: {
              px: '2rem',
            },
          }}
        >
          <Box
            sx={{
              height: 'auto',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingBlock: '1rem',
              [theme.breakpoints.down('md')]: {
                display: 'flex',
                flexDirection: 'column',
              },
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                [theme.breakpoints.down('md')]: {
                  marginRight: 'auto',
                  marginLeft: 'auto',
                },
              }}
            >
              <Box
                component='img'
                src={require('../../assets/logo/NG.png')}
                alt='logo'
                className='header__logo'
              />
            </Box>
            <FooterForm />
          </Box>
          <Box
            sx={{
              height: 'auto',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              // px: "2rem",
              mb: '1rem',
              [theme.breakpoints.down('md')]: {
                display: 'flex',
                flexDirection: 'column',
              },
            }}
          >
            <FooterNav
              sx={{
                [theme.breakpoints.down('md')]: {
                  display: 'flex',
                },
              }}
            />
            <FooterIcons />
          </Box>
          <Box
            sx={{
              pt: '1rem',
              width: '100%',
              maxWidth: '75rem',
              mx: 'auto',
              borderTop: '1px solid #000',
              textAlign: 'center',
            }}
          >
            <Typography sx={{ fontFamily: 'Barlow' }}>
              Made by{' '}
              <Box component='span' sx={{ fontWeight: 700 }}>
                SpaceMan.
              </Box>{' '}
              &copy; Copyright 2022. All Rights Reserved.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Footer
