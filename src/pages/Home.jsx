import About from '../components/about/About'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'
import BusinessHeader from '../components/BusinessHeader'
import NavTabs from '../components/navtabs/NavTabs'
import Business from '../components/business/Business'
import farmLogo from '../../src/assets/images/Nnando-farm.webp'
import realEstateLogo from '../../src/assets/images/Nnando-homes.webp'
import liveStyleLogo from '../../src/assets/images/Nnando-care.webp'
import OilAndGasLogo from '../../src/assets/images/Nnando-oil.webp'
import healthLogo from '../../src/assets/images/Nnando-care.webp'
const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <BusinessHeader />
      <NavTabs />
      <Business
        img={farmLogo}
        title='Agriculture'
        text=' We are a fast growing multi-faceted organisation with business
              tentacles in several industries to bring top-notch services.'
      />
      <Business
        img={realEstateLogo}
        title='Real Estate'
        text=' We are a fast growing multi-faceted organisation with business
              tentacles in several industries to bring top-notch services.'
      />
      <Business
        img={liveStyleLogo}
        title='Lifestyle and Entertainment'
        text=' We are a fast growing multi-faceted organisation with business
              tentacles in several industries to bring top-notch services.'
      />
      <Business
        img={OilAndGasLogo}
        title='Oil and Gas'
        text=' We are a fast growing multi-faceted organisation with business
              tentacles in several industries to bring top-notch services.'
      />
      <Business
        img={healthLogo}
        title='Health Care'
        text=' We are a fast growing multi-faceted organisation with business
              tentacles in several industries to bring top-notch services.'
      />

      <About />
      <Footer />
    </>
  )
}

export default Home
