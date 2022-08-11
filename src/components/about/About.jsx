import { Box, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <Box>
      <Typography
        color='initial'
        sx={{
          fontWeight: '800',
          fontSize: '2.5rem',
          mt: '100px',
          mb: '1rem',
          textAlign: 'center',
        }}
        id='about'
      >
        About Us
      </Typography>
      <Typography
        color='initial'
        sx={{
          fontWeight: '400',
          fontSize: '1.2rem',
          mb: '56px',
          maxWidth: '75rem',
          mx: 'auto',
          px: '16px',
          textAlign: 'center',
        }}
      >
        Nnando Groups is a fast-growing multi-faceted organization with business
        tentacles in several industries to bring top-notch services to our
        reputable customers. Our mission is to make trades much easier by being
        a one-stop entity that serves your needs with a diverse range of
        services. Since its inception, state-of-the-art agribusiness and
        agro-allied services have already been into place. Our teams are ready
        to serve your every need in the Agricultural industry. <br />
        <br /> Our other services include Real-estate and property investment,
        Health care management and medical services, Oil and gas and related
        logistics, and lastly, lifestyle and entertainment.
      </Typography>
    </Box>
  )
}

export default About
