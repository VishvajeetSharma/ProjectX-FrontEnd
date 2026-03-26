import Counter from "./Counter"
import Feedback from "./Feedback"
import HeroSection from "./HeroSection"
import Navbar from "./Navbar"
import Footer from "./Footer"

import "../../styles/style.css"
import PricingSection from "./PricingSection"

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="row">
        <HeroSection />
        <Counter />
        <PricingSection />
        <Feedback />
      </div>
      <Footer />
    </>
  )
}

export default Home