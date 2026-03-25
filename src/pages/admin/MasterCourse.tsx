import DashboardLayout from "../../layout/DashboardLayout";
import MasterCourseCard from "./MasterCourseCard";

// In your component:
const handleEditCourse = (id: any) => {
  console.log('Edit course', id);
};

const handleDeleteCourse = (id: any) => {
  console.log('Delete course', id);
};

const handleToggleCourseStatus = (id: any, currentStatus: any) => {
  console.log('Toggle status for course', id, currentStatus);
};

const masterCourses = [
    {
      id: 1,
      title: "Sketch from A to Z: for app designer",
      desc: "Proposal indulged no do sociable he throwing settling.",
      thumbnail: "https://themes.stackbros.in/eduport_ng/assets/images/courses/4by3/08.jpg",
      level: "Intermediate",
      rating: "4.8",
      duration: "8h 30m",
      type: "Design",
      content: "Learn Sketch from basics to advanced prototyping.",
      status: 1,
      created_at: "2025-03-01T10:00:00Z",
      updated_at: "2025-03-05T12:00:00Z",
    },
    {
      id: 2,
      title: "Graphic Design Masterclass",
      desc: "Rooms oh fully taken by worse do Points afraid.",
      thumbnail: "https://themes.stackbros.in/eduport_ng/assets/images/courses/4by3/02.jpg",
      level: "Beginner",
      rating: "4.5",
      duration: "12h",
      type: "Design",
      content: "Master Photoshop, Illustrator, and InDesign.",
      status: 1,
      created_at: "2025-03-02T09:30:00Z",
      updated_at: "2025-03-06T11:15:00Z",
    },
    {
      id: 3,
      title: "Create a Design System in Figma",
      desc: "Rooms oh fully taken by worse do Points afraid.",
      thumbnail: "https://themes.stackbros.in/eduport_ng/assets/images/courses/4by3/03.jpg",
      level: "Advanced",
      rating: "4.9",
      duration: "6h",
      type: "Design",
      content: "Build scalable design systems from scratch.",
      status: 0,
      created_at: "2025-03-03T08:20:00Z",
      updated_at: "2025-03-07T10:45:00Z",
    },
    {
      id: 4,
      title: "Deep Learning with React Native",
      desc: "Far advanced settling say finished raillery.",
      thumbnail: "https://themes.stackbros.in/eduport_ng/assets/images/courses/4by3/07.jpg",
      level: "Intermediate",
      rating: "4.7",
      duration: "15h",
      type: "Mobile",
      content: "Build AI-powered mobile apps with React Native.",
      status: 1,
      created_at: "2025-03-04T07:10:00Z",
      updated_at: "2025-03-08T09:30:00Z",
    },
    {
      id: 5,
      title: "Build Responsive Websites with HTML",
      desc: "Far advanced settling say finished raillery. Offered chiefly farther.",
      thumbnail: "https://themes.stackbros.in/eduport_ng/assets/images/courses/4by3/04.jpg",
      level: "Beginner",
      rating: "4.6",
      duration: "10h",
      type: "Web",
      content: "Learn modern HTML5 and CSS3 techniques.",
      status: 1,
      created_at: "2025-03-05T06:00:00Z",
      updated_at: "2025-03-09T08:20:00Z",
    },
    {
      id: 6,
      title: "Build Websites with CSS",
      desc: "Far advanced settling say finished raillery. Offered chiefly farther.",
      thumbnail: "https://themes.stackbros.in/eduport_ng/assets/images/courses/4by3/05.jpg",
      level: "Beginner",
      rating: "4.4",
      duration: "8h",
      type: "Web",
      content: "Master CSS Grid, Flexbox, and animations.",
      status: 0,
      created_at: "2025-03-06T05:45:00Z",
      updated_at: "2025-03-10T07:10:00Z",
    },
    {
      id: 7,
      title: "Learn Invision",
      desc: "Arrived off she elderly beloved him Course regard to up he hardly.",
      thumbnail: "https://themes.stackbros.in/eduport_ng/assets/images/courses/4by3/06.jpg",
      level: "Intermediate",
      rating: "4.2",
      duration: "5h",
      type: "Design",
      content: "Prototype and collaborate with Invision.",
      status: 1,
      created_at: "2025-03-07T04:30:00Z",
      updated_at: "2025-03-11T06:00:00Z",
    },
    {
      id: 8,
      title: "JavaScript: Full Understanding",
      desc: "Far advanced settling say finished raillery. Offered chiefly farther.",
      thumbnail: "https://themes.stackbros.in/eduport_ng/assets/images/courses/4by3/01.jpg",
      level: "Advanced",
      rating: "4.9",
      duration: "20h",
      type: "Programming",
      content: "Deep dive into ES6+, closures, and async patterns.",
      status: 1,
      created_at: "2025-03-08T03:15:00Z",
      updated_at: "2025-03-12T05:30:00Z",
    },
];

const MasterCourse = () => {

  return (
    <DashboardLayout>
      <div className="py-5 text-white overflow-x-hidden my-bg-dark">
        <div className="row px-4">
          <div className="col-12">
            {/* Title */}
            <div className="text-start mb-4">
              <h1 className="fw-bold">Master Courses</h1>
              <p className="text-secondary">
                Choose from hundreds of courses from specialist organizations
              </p>
            </div>

            {/* Cards */}
            <div className="row g-4">
              {masterCourses.map((course) => (
                <MasterCourseCard
                  key={course.id}
                  {...course}
                  onEdit={(id) => handleEditCourse(id)}
                  onDelete={(id) => handleDeleteCourse(id)}
                  onToggleStatus={(id, status) => handleToggleCourseStatus(id, status)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MasterCourse;