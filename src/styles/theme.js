import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1068ee',
    },
    secondary: {
      main: '#d1d9e7',
    },
    black: {
      main: '#000',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
      color: '#fff',
    },
    fontFamily: 'Manrope',
  },
})
