import { Button } from '@mui/material'

const BusinessButton = ({ children, link, disabled }) => {
  return (
    <Button
      href={link}
      disabled={disabled}
      variant='contained'
      disableElevation
      size='large'
      color='primary'
    >
      {children}
    </Button>
  )
}

export default BusinessButton
