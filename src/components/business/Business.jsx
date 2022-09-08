import React from 'react'
import { Box, Button, useTheme } from '@mui/material'

const Business = (props) => {
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
        <Box component='div' className='card-container'>
          <Box component='div' className='card-column'>
            <Box
              component='img'
              className='card-logo'
              src={props.img}
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
            <Box component='h1'>{props.title}</Box>
            <Box
              component='p'
              sx={{
                mb: '2rem',
              }}
              className='business-content-text'
            >
              {props.text}
            </Box>
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
