import { useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  OutlinedInput,
  Typography,
} from '@mui/material'

const FooterForm = () => {
  const [mail, setMail] = useState('')

  return (
    <Box>
      <Typography
        sx={{
          fontSize: '1.8rem',
          fontWeight: 'bold',
          textAlign: 'right',
          mb: '1rem',
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
          width: '600px',
        }}
      >
        <FormControl variant='outlined'>
          <OutlinedInput
            placeholder='Enter your email'
            color='black'
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
