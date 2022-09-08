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
    </Box>
  )
}

export default BusinessHeader
