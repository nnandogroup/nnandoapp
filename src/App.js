import { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import React from 'react'
import Home from './pages/Home'
import { theme } from './styles/theme'

const ScrollToTop = ({ children }) => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return <>{children}</>
}

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <ScrollToTop>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </ScrollToTop>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
