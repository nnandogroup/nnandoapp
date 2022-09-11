import { Typography } from '@mui/material'

const BusinessNavHeading = ({ children }) => {
  return (
    <Typography
      variant='h5'
      color='initial'
      sx={{
        textDecoration: 'underline solid #1068ee 5px',
        mb: '30px',
        fontWeight: '500',
      }}
    >
      {children}
    </Typography>
  )
}

export default BusinessNavHeading
