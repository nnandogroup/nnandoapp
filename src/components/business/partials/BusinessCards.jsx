import { useTheme, Box } from '@mui/material'
import { businessDescription } from '../../../data/businessDescription'
import BusinessButton from './BusinessButton'

const BusinessCards = () => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        padding: '1rem',
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
      }}
      id='business'
    >
      {businessDescription.map((data) => (
        <Box key={data.title}>
          <Box component='div' className='card-container'>
            <Box component='div' className='card-image'>
              <Box
                component='img'
                className='card-logo'
                alt='Nnando Farms Logo'
                src={data.image}
                sx={{
                  width: '15rem',
                  height: '15rem',
                }}
              />
            </Box>
            <Box component='div' className='card-info'>
              <Box component='h1'> {data.title}</Box>
              <Box
                component='p'
                sx={{
                  mb: '2rem',
                }}
                className='card-content-text'
              >
                {data.body}
              </Box>
              <BusinessButton href={data.link} disabled={data.status}>
                {data.buttonText}
              </BusinessButton>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default BusinessCards
