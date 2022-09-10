import React from 'react'
import { Box, Button, useTheme } from '@mui/material'
// import { useState } from 'react'

const Business = (props) => {
  const theme = useTheme()

  // const [disabledBtn, setDisabledBtn] = useState(false)

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
          <Box component='div' className='card-image'>
            <Box
              component='img'
              className='card-logo'
              src={props.img}
              alt='Nnando Farms Logo'
              sx={{
                width: '15rem',
                height: '15rem',
              }}
            />
          </Box>
          <Box component='div' className='card-info'>
            <Box component='h1'>{props.title}</Box>
            <Box
              component='p'
              sx={{
                mb: '2rem',
              }}
              className='card-content-text'
            >
              {props.text}
            </Box>
            <Button color='primary' variant='contained' link={props.btnlink}>
              {props.btntext}
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Business
