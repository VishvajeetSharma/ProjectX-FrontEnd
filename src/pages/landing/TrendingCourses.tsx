// const TrendingCourses = () => {
//   return (
//     <div>TrendingCourses</div>
//   )
// }

// export default TrendingCourses


// pages/TrendingCourses.jsx

import TrendingCard from "./TrendingCard";

const TrendingCourses = () => {
  const courses = [
    {
      image: "https://themes.stackbros.in/eduport_ng/assets/images/courses/4by3/15.jpg",
      category: "Design",
      level: "Beginner",
      title: "Time Management Mastery: Do More, Stress Less",
      rating: 4,
      students: 2000,
      duration: "9h 56m",
      lectures: 21,
      authorImage: "https://themes.stackbros.in/eduport_ng/assets/images/avatar/09.jpg",
      author: "Frances Guerrero",
      price: 200,
    },
    {
      image: "https://themes.stackbros.in/eduport_ng/assets/images/courses/4by3/14.jpg",
      category: "Design",
      level: "Beginner",
      title: "The complete Digital Marketing Course - 8 Course in 1",
      rating: 4.5,
      students: 6500,
      duration: "6h 56m",
      lectures: 82,
      authorImage: "https://themes.stackbros.in/eduport_ng/assets/images/avatar/10.jpg",
      author: "Larry Lawson",
      isFree: true,
    },
    {
      image: "https://themes.stackbros.in/eduport_ng/assets/images/courses/4by3/16.jpg",
      category: "Development",
      level: "All level",
      title: "Angular – The Complete Guide (2021 Edition)",
      rating: 4,
      students: 3500,
      duration: "12h 45m",
      lectures: 65,
      authorImage: "https://themes.stackbros.in/eduport_ng/assets/images/avatar/01.jpg",
      author: "Billy Vasquez",
      price: 255,
    },
  ];

  return (
    <div className="container py-5 text-white my-bg-dark">
      <div className="row">
        <div className="col-sm-10 mx-auto">

          {/* Title */}
          <div className="text-center mb-5">
            <h1 className="fw-bold">Our Trending Courses</h1>
            <p className="text-secondary">
              Check out most 🔥 courses in the market
            </p>
          </div>

          {/* Cards */}
          <div className="row">
            {courses.map((course, index) => (
              <TrendingCard key={index} {...course} />
            ))}
          </div>
        </div>

      </div>
    </div>

  );
};

export default TrendingCourses;