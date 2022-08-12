import { Box, Button, Typography, useTheme } from '@mui/material'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

const TabsPanelHeading = ({ children }) => {
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

const TabPanelBody = ({ children }) => {
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

const TabPanelButton = ({ children, link, disabled }) => {
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

const NavTabs = () => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        [theme.breakpoints.down('lg')]: {
          px: '20px',
        },
        [theme.breakpoints.down('md')]: {
          display: 'none',
        },
        mt: '2rem',
        maxWidth: '75rem',
        px: '5px',
        mx: 'auto',
        pt: '1rem',
      }}
    >
      <Typography
        sx={{
          color: 'black',
          fontSize: '1.5rem',
          fontWeight: '600',
          lineHeight: '1.5',
          fontFamily: 'Barlow',
          textAlign: 'center',
        }}
      >
        What we do
      </Typography>
      <Typography
        sx={{
          color: '#1068ee',
          fontSize: '2.5rem',
          fontWeight: '600',

          fontFamily: 'Barlow',
          marginBottom: '2rem',
          textAlign: 'center',
        }}
      >
        Our Business Areas
      </Typography>
      <Tabs>
        <TabList>
          <Tab>Agriculture</Tab>
          <Tab>Real Estate</Tab>
          <Tab>Lifestyle & Entertainment</Tab>
          <Tab>Oil & Gas</Tab>
          <Tab>Health Care</Tab>
        </TabList>
        <TabPanel>
          <Box
            component='img'
            src={require('../../assets/images/NnandoFarmsLogo.webp')}
            alt='Nnando Farms Logo'
            sx={{
              width: '15rem',
              height: '15rem',
              mr: '5rem',
            }}
          />
          <Box>
            <TabsPanelHeading>Agriculture</TabsPanelHeading>
            <TabPanelBody>
              We are a fast growing multi-faceted organisation with business
              <br />
              tentacles in several industries to bring top-notch services
            </TabPanelBody>
            <TabPanelButton link={'farm.nnando.com'}>
              Goto Nnando Farms
            </TabPanelButton>
          </Box>
        </TabPanel>
        <TabPanel>
          <Box
            component='img'
            src={require('../../assets/images/NnandoFarmsLogo.webp')}
            alt='Nnando Farms Logo'
            sx={{
              width: '15rem',
              height: '15rem',
              mr: '5rem',
            }}
          />
          <Box>
            <TabsPanelHeading>Real Estate</TabsPanelHeading>
            <TabPanelBody>
              We are a fast growing multi-faceted organisation with business
              <br />
              tentacles in several industries to bring top-notch services
            </TabPanelBody>
            <TabPanelButton link={'estate.nnando.com'} disabled>
              Goto Nnando Estate
            </TabPanelButton>
          </Box>
        </TabPanel>
        <TabPanel>
          <Box
            component='img'
            src={require('../../assets/images/NnandoFarmsLogo.webp')}
            alt='Nnando Farms Logo'
            sx={{
              width: '15rem',
              height: '15rem',
              mr: '5rem',
            }}
          />
          <Box>
            <TabsPanelHeading>Lifestyle & Entertainment</TabsPanelHeading>
            <TabPanelBody>
              We are a fast growing multi-faceted organisation with business
              <br />
              tentacles in several industries to bring top-notch services
            </TabPanelBody>
            <TabPanelButton link={'lifestyle.nnando.com'} disabled>
              Goto Nnando Lifestyle
            </TabPanelButton>
          </Box>
        </TabPanel>
        <TabPanel>
          <Box
            component='img'
            src={require('../../assets/images/NnandoFarmsLogo.webp')}
            alt='Nnando Farms Logo'
            sx={{
              width: '15rem',
              height: '15rem',
              mr: '5rem',
            }}
          />
          <Box>
            <TabsPanelHeading>Oil & Gas</TabsPanelHeading>
            <TabPanelBody>
              We are a fast growing multi-faceted organisation with business
              <br />
              tentacles in several industries to bring top-notch services
            </TabPanelBody>
            <TabPanelButton link={'oil.nnando.com'} disabled>
              Goto Nnando Oil
            </TabPanelButton>
          </Box>
        </TabPanel>
        <TabPanel>
          <Box
            component='img'
            src={require('../../assets/images/NnandoFarmsLogo.webp')}
            alt='Nnando Farms Logo'
            sx={{
              width: '15rem',
              height: '15rem',
              mr: '5rem',
            }}
          />
          <Box>
            <TabsPanelHeading>Health Care</TabsPanelHeading>
            <TabPanelBody>
              We are a fast growing multi-faceted organisation with business
              <br />
              tentacles in several industries to bring top-notch services
            </TabPanelBody>
            <TabPanelButton link={'care.nnando.com'} disabled>
              Goto Nnando Care
            </TabPanelButton>
          </Box>
        </TabPanel>
      </Tabs>
    </Box>
  )
}

export default NavTabs
