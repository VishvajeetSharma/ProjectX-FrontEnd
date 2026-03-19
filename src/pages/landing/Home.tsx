import Counter from "./Counter"
import Feedback from "./Feedback"
import Footer from "./Footer"
import HeroSection from "./HeroSection"
import MostPopularCourse from "./MostPopularCourse"
import Navbar from "./Navbar"
import TrendingCourses from "./TrendingCourses"

import "../../styles/style.css"

const Home = () => {
  return (
    <>
      <div className="row">
        <Navbar />
        <HeroSection />
        <Counter />
        <MostPopularCourse />
        <TrendingCourses />
        <Feedback />
        <Footer />
      </div>
    </>
  )
}

export default Home