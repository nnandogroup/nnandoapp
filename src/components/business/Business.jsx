import React from 'react'
import { Box, Button, Typography, useTheme } from '@mui/material'

const Business = () => {
  const theme = useTheme()
  return (
    <>
      <Box
        sx={{
          padding: '2rem',
          [theme.breakpoints.up('md')]: {
            display: 'none',
          },
        }}
      >
        <Typography
          sx={{
            color: 'black',
            fontSize: '1.5rem',
            fontWeight: '600',
            lineHeight: '1.5',
            marginTop: '2rem',
            fontFamily: 'Barlow',
            textAlign: 'center',
          }}
        >
          What we do
        </Typography>
        <Typography
          sx={{
            color: '#1068ee',
            fontSize: '2.5rem',
            fontWeight: '600',

            fontFamily: 'Barlow',
            marginBottom: '2rem',
            textAlign: 'center',
            [theme.breakpoints.down('sm')]: {
              lineHeight: '48px',
              fontSize: '2rem',
            },
          }}
        >
          Our Business Areas
        </Typography>

        <Box component='div' className='card-container'>
          <Box component='div' className='card-column'>
            <Box
              component='img'
              className='card-logo'
              src={require('../../../src/assets/images/NnandoFarmsLogo.webp')}
              alt='Nnando Farms Logo'
              sx={{
                width: '15rem',
                height: '15rem',
                justifyContent: 'left',
                [theme.breakpoints.down('sm')]: {
                  width: '12rem',
                  height: '12rem',
                },
              }}
            />
          </Box>
          <Box component='div' className='card-column'>
            <h1>Agriculture</h1>
            <p
              sx={{
                mb: '2rem',
              }}
              className='business-content-text'
            >
              We are a fast growing multi-faceted organisation with business
              tentacles in several industries to bring top-notch services.
            </p>
            <Button color='primary' variant='outlined' link={'farm.nnando.com'}>
              Go to Nnando Farms
            </Button>
          </Box>
        </Box>

        <Box component='div' className='card-container'>
          <Box component='div' className='card-column'>
            <h1>Real Estate</h1>
            <p
              sx={{
                mb: '2rem',
              }}
              className='business-content-text'
            >
              We are a fast growing multi-faceted organisation with business
              tentacles in several industries to bring top-notch services.
            </p>
            <Button color='primary' variant='outlined' link={'farm.nnando.com'}>
              Go to Nnando Farms
            </Button>
          </Box>
          <Box component='div' className='card-column'>
            <Box
              component='img'
              className='card-logo'
              src={require('../../../src/assets/images/NnandoFarmsLogo.webp')}
              alt='Nnando Farms Logo'
              sx={{
                width: '15rem',
                height: '15rem',
                justifyContent: 'left',
                [theme.breakpoints.down('sm')]: {
                  width: '12rem',
                  height: '12rem',
                },
              }}
            />
          </Box>
        </Box>

        <Box component='div' className='card-container'>
          <Box component='div' className='card-column'>
            <Box
              component='img'
              className='card-logo'
              src={require('../../../src/assets/images/NnandoFarmsLogo.webp')}
              alt='Nnando Farms Logo'
              sx={{
                width: '15rem',
                height: '15rem',
                justifyContent: 'left',
                [theme.breakpoints.down('sm')]: {
                  width: '12rem',
                  height: '12rem',
                },
              }}
            />
          </Box>
          <Box component='div' className='card-column'>
            <h1>Lifestyle & Entertainment</h1>
            <p
              sx={{
                mb: '2rem',
              }}
              className='business-content-text'
            >
              We are a fast growing multi-faceted organisation with business
              tentacles in several industries to bring top-notch services.
            </p>
            <Button color='primary' variant='outlined' link={'farm.nnando.com'}>
              Go to Nnando Farms
            </Button>
          </Box>
        </Box>

        <Box component='div' className='card-container'>
          <Box component='div' className='card-column'>
            <h1>Oil and Gas</h1>
            <p
              sx={{
                mb: '2rem',
              }}
              className='business-content-text'
            >
              We are a fast growing multi-faceted organisation with business
              tentacles in several industries to bring top-notch services.
            </p>
            <Button color='primary' variant='outlined' link={'farm.nnando.com'}>
              Go to Nnando Farms
            </Button>
          </Box>
          <Box component='div' className='card-column'>
            <Box
              component='img'
              className='card-logo'
              src={require('../../../src/assets/images/NnandoFarmsLogo.webp')}
              alt='Nnando Farms Logo'
              sx={{
                width: '15rem',
                height: '15rem',
                justifyContent: 'left',
                [theme.breakpoints.down('sm')]: {
                  width: '12rem',
                  height: '12rem',
                },
              }}
            />
          </Box>
        </Box>

        <Box component='div' className='card-container'>
          <Box component='div' className='card-column'>
            <Box
              component='img'
              className='card-logo'
              src={require('../../../src/assets/images/NnandoFarmsLogo.webp')}
              alt='Nnando Farms Logo'
              sx={{
                width: '15rem',
                height: '15rem',
                justifyContent: 'left',
                [theme.breakpoints.down('sm')]: {
                  width: '12rem',
                  height: '12rem',
                },
              }}
            />
          </Box>
          <Box component='div' className='card-column'>
            <h1>Health Care</h1>
            <p
              sx={{
                mb: '2rem',
              }}
              className='business-content-text'
            >
              We are a fast growing multi-faceted organisation with business
              tentacles in several industries to bring top-notch services.
            </p>
            <Button color='primary' variant='outlined' link={'farm.nnando.com'}>
              Go to Nnando Farms
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Business
