import Counter from "../../components/landing/Counter"
import Feedback from "./Feedback"
import HeroSection from "../../components/landing/HeroSection"
import Navbar from "../../components/landing/Navbar"
import Footer from "../../components/landing/Footer"

import "../../styles/style.css"
import PricingSection from "../../components/landing/PricingSection"

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