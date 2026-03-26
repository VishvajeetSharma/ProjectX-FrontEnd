import { useState } from "react";
import CourseCard from "./CourseCard";

const MostPopularCourse = () => {
  const [activeTab, setActiveTab] = useState("Web Design");

  const categories = [
    "Web Design",
    "Development",
    "Graphic Design",
    "Marketing",
    "Finance",
  ];

const courses = [
  {
    category: "Web Design",
    image: "https://themes.stackbros.in/eduport_ng/assets/images/courses/4by3/08.jpg",
    level: "All level",
    title: "Sketch from A to Z: for app designer",
    desc: "Proposal indulged no do sociable he throwing settling.",
    rating: "4.5/5.0",
    duration: "12h 56m",
    lectures: 15,
  },
  {
    category: "Development",
    image: "https://themes.stackbros.in/eduport_ng/assets/images/courses/4by3/02.jpg",
    level: "Beginner",
    title: "Graphic Design Masterclass",
    desc: "Rooms oh fully taken by worse do Points afraid.",
    rating: "4.5/5.0",
    duration: "9h 56m",
    lectures: 65,
  },
  {
    category: "Graphic Design",
    image: "https://themes.stackbros.in/eduport_ng/assets/images/courses/4by3/03.jpg",
    level: "Beginner",
    title: "Create a Design System in Figma",
    desc: "Rooms oh fully taken by worse do Points afraid.",
    rating: "4.5/5.0",
    duration: "5h 56m",
    lectures: 32,
  },
  {
    category: "Marketing",
    image: "https://themes.stackbros.in/eduport_ng/assets/images/courses/4by3/07.jpg",
    level: "Beginner",
    title: "Deep Learning with React Native",
    desc: "Far advanced settling say finished raillery.",
    rating: "4/5.0",
    duration: "18h 56m",
    lectures: 99,
  },
  {
    category: "Finance",
    image: "https://themes.stackbros.in/eduport_ng/assets/images/courses/4by3/04.jpg",
    level: "Beginner",
    title: "Build Responsive Websites with HTML",
    desc: "Far advanced settling say finished raillery. Offered chiefly farther",
    rating: "4/5.0",
    duration: "15h 30m",
    lectures: 68,
  },
  {
    category: "Web Design",
    image: "https://themes.stackbros.in/eduport_ng/assets/images/courses/4by3/05.jpg",
    level: "All level",
    title: "Build Websites with CSS",
    desc: "Far advanced settling say finished raillery. Offered chiefly farther",
    rating: "4.5/5.0",
    duration: "36h 30m",
    lectures: 72,
  },
  {
    category: "Development",
    image: "https://themes.stackbros.in/eduport_ng/assets/images/courses/4by3/06.jpg",
    level: "All level",
    title: "Learn Invision",
    desc: "Arrived off she elderly beloved him Course regard to up he hardly.",
    rating: "3.5/5.0",
    duration: "6h 56m",
    lectures: 82,
  },
  {
    category: "Graphic Design",
    image: "https://themes.stackbros.in/eduport_ng/assets/images/courses/4by3/01.jpg",
    level: "All level",
    title: "JavaScript: Full Understanding",
    desc: "Far advanced settling say finished raillery. Offered chiefly farther.",
    rating: "5/5.0",
    duration: "35h 20m",
    lectures: 89,
  }
];

  const filteredCourses = courses.filter(course => course.category === activeTab);

  return (
    <div className="container py-5 text-white my-bg-dark">
      <div className="row">
        <div className="col-sm-10 mx-auto">


          {/* Title */}
          <div className="text-center mb-4">
            <h1 className="fw-bold text-dark">Most Popular Courses</h1>
            <p className="text-secondary">
              Choose from hundreds of courses from specialist organizations
            </p>
          </div>

          {/* Tabs */}
          <div className="text-center mb-5">
            <div className="course-tabs-container">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`course-tab-btn ${activeTab === cat ? "active" : ""}`}
                  onClick={() => setActiveTab(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="row g-4">
            {filteredCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostPopularCourse;