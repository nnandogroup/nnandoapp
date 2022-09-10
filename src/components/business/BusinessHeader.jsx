import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'

const BusinessHeader = () => {
  const theme = useTheme()
  return (
    <Box>
      <Typography
        sx={{
          color: 'black',
          fontSize: '1.5rem',
          fontWeight: '600',
          lineHeight: '1.5',
          marginTop: '6rem',
          marginBottom: '-16px',
          fontFamily: 'Barlow',
          textAlign: 'center',
          [theme.breakpoints.down('sm')]: {
            marginBottom: 0,
          },
        }}
        id='business'
      >
        What we do
      </Typography>
      <Typography
        sx={{
          color: '#1068ee',
          fontSize: '2.5rem',
          fontWeight: '600',

          fontFamily: 'Barlow',
          textAlign: 'center',
          [theme.breakpoints.down('sm')]: {
            lineHeight: '24px',
            fontSize: '2rem',
          },
        }}
      >
        Our Business Areas
      </Typography>
    </Box>
  )
}

export default BusinessHeader
