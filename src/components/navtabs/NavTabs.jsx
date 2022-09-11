import { Box, Button, Typography, useTheme } from '@mui/material'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import BusinessNavHeading from '../business/partials/BusinessNavHeading'
import BusinessButton from '../business/partials/BusinessButton'
import BusinessText from '../business/partials/BusinessText'

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
        maxWidth: '75rem',
        px: '5px',
        mx: 'auto',
        pt: '1rem',
      }}
    >
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
            <BusinessNavHeading>Agriculture</BusinessNavHeading>
            <BusinessText>
              We are a fast growing multi-faceted organisation with business
              <br />
              tentacles in several industries to bring top-notch services
            </BusinessText>
            <BusinessButton link={'farm.nnando.com'}>
              Goto Nnando Farms
            </BusinessButton>
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
            <BusinessNavHeading>Real Estate</BusinessNavHeading>
            <BusinessText>
              We are a fast growing multi-faceted organisation with business
              <br />
              tentacles in several industries to bring top-notch services
            </BusinessText>
            <BusinessButton link={'estate.nnando.com'} disabled>
              Goto Nnando Estate
            </BusinessButton>
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
            <BusinessNavHeading>Lifestyle & Entertainment</BusinessNavHeading>
            <BusinessText>
              We are a fast growing multi-faceted organisation with business
              <br />
              tentacles in several industries to bring top-notch services
            </BusinessText>
            <BusinessButton link={'lifestyle.nnando.com'} disabled>
              Goto Nnando Lifestyle
            </BusinessButton>
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
            <BusinessNavHeading>Oil & Gas</BusinessNavHeading>
            <BusinessText>
              We are a fast growing multi-faceted organisation with business
              <br />
              tentacles in several industries to bring top-notch services
            </BusinessText>
            <BusinessButton link={'oil.nnando.com'} disabled>
              Goto Nnando Oil
            </BusinessButton>
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
            <BusinessNavHeading>Health Care</BusinessNavHeading>
            <BusinessText>
              We are a fast growing multi-faceted organisation with business
              <br />
              tentacles in several industries to bring top-notch services
            </BusinessText>
            <BusinessButton link={'care.nnando.com'} disabled>
              Goto Nnando Care
            </BusinessButton>
          </Box>
        </TabPanel>
      </Tabs>
    </Box>
  )
}

export default NavTabs
