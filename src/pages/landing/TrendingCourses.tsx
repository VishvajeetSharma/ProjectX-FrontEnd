// const TrendingCourses = () => {
//   return (
//     <div>TrendingCourses</div>
//   )
// }

// export default TrendingCourses


// pages/TrendingCourses.jsx

import CourseCard from "./CourseCard";

const TrendingCourses = () => {
  const courses = [
    {
      image: "https://themes.stackbros.in/eduport_ng/assets/images/courses/4by3/15.jpg",
      level: "Beginner",
      title: "Time Management Mastery: Do More, Stress Less",
      desc: "Master the art of productivity and learn how to manage your time effectively for maximum results.",
      rating: "4.5/5.0",
      duration: "9h 56m",
      lectures: 21,
    },
    {
      image: "https://themes.stackbros.in/eduport_ng/assets/images/courses/4by3/14.jpg",
      level: "Intermediate",
      title: "The complete Digital Marketing Course - 8 Course in 1",
      desc: "Learn SEO, Social Media Marketing, Google Ads, and more in this comprehensive digital marketing guide.",
      rating: "4.8/5.0",
      duration: "6h 56m",
      lectures: 82,
    },
    {
      image: "https://themes.stackbros.in/eduport_ng/assets/images/courses/4by3/16.jpg",
      level: "All level",
      title: "Angular – The Complete Guide (2025 Edition)",
      desc: "Master Angular (formerly 'Angular 2') and build awesome, reactive web apps with the successor of Angular.js.",
      rating: "4.7/5.0",
      duration: "12h 45m",
      lectures: 65,
    },
    {
      image: "https://themes.stackbros.in/eduport_ng/assets/images/courses/4by3/21.jpg",
      level: "Advanced",
      title: "Machine Learning A-Z™: Hands-On Python & R",
      desc: "Learn to create Machine Learning Algorithms in Python and R from two Data Science experts.",
      rating: "4.9/5.0",
      duration: "15h 30m",
      lectures: 45,
    },
  ];

  return (
    <div className="container-fluid py-5 text-white my-bg-dark">
      <div className="row">
        <div className="col-lg-11 col-xl-10 mx-auto px-4">

          {/* Title */}
          <div className="text-center mb-5">
            <h1 className="fw-bold mb-3 text-dark">Our Trending Courses</h1>
            <p className="text-secondary mx-auto" style={{ maxWidth: '600px' }}>
              Check out the most 🔥 courses in the market today and start your learning journey with our top-rated content.
            </p>
          </div>

          {/* Cards */}
          <div className="row">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCourses;
