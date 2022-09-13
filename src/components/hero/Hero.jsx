import { Box, Button, Typography, useTheme } from '@mui/material'
import TypeAnimation from 'react-type-animation'

const Hero = () => {
  const theme = useTheme()
  const scrollToServices = () => {
    document
      .getElementById('about')
      .scrollIntoView({ behavior: 'smooth', alignToTop: true })
  }

  return (
    <Box
      sx={{
        height: '100%',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url(${require('../../assets/images/HeroImage.webp')})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        paddingBlock: '4rem',
      }}
    >
      <Box
        sx={{
          maxWidth: '75rem',
          height: '100%',
          mx: 'auto',
          px: '5px',
          display: 'flex',
          alignItems: 'center',
          [theme.breakpoints.down('lg')]: {
            px: '20px',
          },
          [theme.breakpoints.down('md')]: {
            px: '20px',
          },
        }}
      >
        <Box>
          <Typography
            color='white'
            sx={{
              fontSize: '2rem',
              fontWeight: '800',
              fontFamily: 'Barlow',
              height: '3rem',
              [theme.breakpoints.down('sm')]: {
                // marginTop: '4rem',
              },
            }}
          >
            <TypeAnimation
              cursor={true}
              sequence={[
                'Agriculture',
                4000,
                'Real Estate',
                4000,
                'Oil & Gas',
                4000,
                'Health Care',
                4000,
                'Lifestyle',
                4000,
                ' Entertainment',
                4000,
              ]}
              wrapper='a'
              repeat={Infinity}
            />
          </Typography>
          <Typography
            sx={{
              color: 'white',
              fontSize: '5rem',
              fontWeight: '600',
              lineHeight: '69px',
              fontFamily: 'Barlow',
              marginBottom: '1rem',
            }}
          >
            Nnando Groups
          </Typography>
          <Typography
            sx={{
              color: 'white',
              fontSize: '1rem',
              fontWeight: '400',
              lineHeight: '28px',
              marginBottom: '2rem',
            }}
          >
            Nnando Groups is a fast growing multi-faceted
            <br />
            organisation with business tentacles in
            <br />
            several industries delivering high-quality
            <br />
            services to all our customers.
          </Typography>
          <Button
            variant='outlined'
            size='large'
            sx={{
              color: 'white',
              borderColor: 'white',
              fontSize: '1.25rem',
              fontWeight: '700',
              borderRadius: '50px',
            }}
            onClick={scrollToServices}
          >
            Learn More
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Hero
