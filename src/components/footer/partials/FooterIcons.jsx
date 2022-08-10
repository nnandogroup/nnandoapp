import { Box } from '@mui/system'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'

const FooterIcons = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#000',
      }}
    >
      <Box component='li'>
        <Box
          component='a'
          sx={{
            color: '#000',
            '&:hover': {
              color: 'primary.main',
            },
            ml: '10px',
          }}
          href='/'
        >
          <LocalPhoneIcon />
        </Box>
      </Box>
      <Box component='li'>
        <Box
          component='a'
          sx={{
            color: '#000',
            '&:hover': {
              color: 'primary.main',
            },
            ml: '10px',
          }}
          href='/'
        >
          <WhatsAppIcon />
        </Box>
      </Box>
      <Box component='li'>
        <Box
          component='a'
          sx={{
            color: '#000',
            '&:hover': {
              color: 'primary.main',
            },
            ml: '10px',
          }}
          href='/'
        >
          <FacebookIcon />
        </Box>
      </Box>
      <Box component='li'>
        <Box
          component='a'
          sx={{
            color: '#000',
            '&:hover': {
              color: 'primary.main',
            },
            ml: '10px',
          }}
          href='/'
        >
          <InstagramIcon />
        </Box>
      </Box>
    </Box>
  )
}

export default FooterIcons
