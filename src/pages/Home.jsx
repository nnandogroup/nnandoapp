import About from '../components/about/About'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'
import NavTabs from '../components/navtabs/NavTabs'
import Business from '../components/business/Business'

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Business />
      <NavTabs />
      <About />
      <Footer />
    </>
  )
}

export default Home
