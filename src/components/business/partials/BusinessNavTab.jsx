import { businessDescription } from '../../../data/businessDescription'
import { Box, useTheme } from '@mui/material'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import BusinessNavHeading from '../partials/BusinessNavHeading'
import BusinessButton from '../partials/BusinessButton'
import BusinessText from '../partials/BusinessText'

const BusinessNavTab = () => {
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
          {businessDescription.map((data) => (
            <Tab>{data.title}</Tab>
          ))}
        </TabList>
        {businessDescription.map((data) => (
          <TabPanel>
            <Box
              component='img'
              src={data.image}
              alt='Nnando Farms Logo'
              sx={{
                width: '15rem',
                height: '15rem',
                mr: '5rem',
                ml: '4rem',
              }}
            />
            <Box>
              <BusinessNavHeading>{data.title}</BusinessNavHeading>
              <BusinessText>{data.body}</BusinessText>
              <BusinessButton link={data.link} disab>
                {data.buttonText}
              </BusinessButton>
            </Box>
          </TabPanel>
        ))}
      </Tabs>
    </Box>
  )
}

export default BusinessNavTab
