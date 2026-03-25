import Counter from "./Counter"
import Feedback from "./Feedback"
import HeroSection from "./HeroSection"
import MostPopularCourse from "./MostPopularCourse"
import TrendingCourses from "./TrendingCourses"
import Navbar from "./Navbar"
import Footer from "./Footer"

import "../../styles/style.css"

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="row">
        <HeroSection />
        <Counter />
        <MostPopularCourse />
        <TrendingCourses />
        <Feedback />
      </div>
      <Footer />
    </>
  )
}

export default Home