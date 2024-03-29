import { Box, Typography, useTheme } from '@mui/material'

const About = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        marginTop: '2rem',
        width: '100%',
        height: '650px',
        padding: '4rem',
        position: 'relative',
        clipPath: 'polygon(0 2%, 100% 0, 100% 100%, 0% 100%)',

        background:
          'linear-gradient(0deg, rgba(16,104,238,1) 0%, rgba(0,206,248,1) 100%)',

        [theme.breakpoints.down('md')]: {
          padding: '4rem',
        },
      }}
      id='about'
    >
      <Box
        sx={{
          backgroundImage: ` url(${require('../../assets/images/community-gce75485d9_1280.png')})`,
          filter: 'blur(1.5px)',
          border: 'none',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '25rem',
          width: '25rem',
          position: 'absolute',
          top: ' 50%',
          left: ' 50%',
          transform: 'translate(-50%, -50%)',
          [theme.breakpoints.down('md')]: {
            width: '15rem',
            height: '15rem',
          },
        }}
      ></Box>
      <Box
        sx={{
          width: '100vw',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',

          [theme.breakpoints.down('sm')]: {
            px: '2rem',
          },
        }}
      >
        <Typography
          color='white'
          sx={{
            fontWeight: '900',
            fontSize: '2.5rem',
            mt: '20px',
            mb: '1rem',
            textAlign: 'center',
            [theme.breakpoints.down('md')]: {
              mt: '1rem',
              fontSize: '2rem',
            },
            [theme.breakpoints.down('sm')]: {
              mt: '2rem',
            },
          }}
          id='about'
        >
          About Us
        </Typography>
        <Typography
          color='white'
          sx={{
            fontWeight: '600',
            fontSize: '1.5rem',
            mb: '56px',
            maxWidth: '70%',
            mx: 'auto',
            px: '5px',
            textAlign: 'center',
            [theme.breakpoints.down('md')]: {
              fontSize: '1rem',
            },

            [theme.breakpoints.down('sm')]: {
              maxWidth: '100vw',
            },
          }}
        >
          Nnando Groups is a fast-growing multi-faceted organization with
          business tentacles in several industries to bring top-notch services
          to our reputable customers. Our mission is to make trades much easier
          by being a one-stop entity that serves your needs with a diverse range
          of services. Since its inception, state-of-the-art agribusiness and
          agro-allied services have already been into place. Our teams are ready
          to serve your every need in the Agricultural industry. <br />
          <br /> Our other services include Real-estate and property investment,
          Health care management and medical services, Oil and gas and related
          logistics, and lastly, lifestyle and entertainment.
        </Typography>
      </Box>
    </Box>
  )
}

export default About
