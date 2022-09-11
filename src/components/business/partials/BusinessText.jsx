import { Typography } from '@mui/material'

const BusinessText = ({ children }) => {
  return (
    <Typography
      variant='body1'
      color='initial'
      sx={{
        mb: '20px',
        fontWeight: '500',
      }}
    >
      {children}
    </Typography>
  )
}

export default BusinessText
