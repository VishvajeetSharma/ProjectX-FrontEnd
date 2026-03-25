import Counter from "./Counter"
import Feedback from "./Feedback"
import HeroSection from "./HeroSection"
import MostPopularCourse from "./MostPopularCourse"
import TrendingCourses from "./TrendingCourses"

import "../../styles/style.css"

const Home = () => {
  return (
    <>
      <div className="row">
        <HeroSection />
        <Counter />
        <MostPopularCourse />
        <TrendingCourses />
        <Feedback />
      </div>
    </>
  )
}

export default Home