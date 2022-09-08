import { useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  OutlinedInput,
  Typography,
  useTheme,
} from '@mui/material'

const FooterForm = () => {
  const theme = useTheme()
  const [mail, setMail] = useState('')

  return (
    <Box>
      <Typography
        sx={{
          fontSize: '1.8rem',
          fontWeight: 'bold',
          textAlign: 'right',
          mb: '1rem',
          [theme.breakpoints.down('md')]: {
            textAlign: 'center',
            fontSize: '1.4rem',
          },
        }}
      >
        Subscribe to our Newsletter
      </Typography>
      <Box
        component='form'
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'right',
          width: '100%',
          [theme.breakpoints.down('md')]: {
            justifyContent: 'center',
          },
        }}
      >
        <FormControl variant='outlined'>
          <OutlinedInput
            placeholder='Enter your email'
            color='primary'
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            size='small'
          />
        </FormControl>
        <Button
          variant='outlined'
          color='black'
          sx={{
            height: '40px',
            ml: '1rem',
            fontWeight: 700,
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  )
}

export default FooterForm
