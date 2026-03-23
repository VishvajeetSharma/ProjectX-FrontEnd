import DashboardLayout from "../../layout/DashboardLayout"
import MasterCourseCard from "./MasterCourseCard";

const MasterCourse = () => {

  const masterCourses = [
    {
      id: 1,
      name: "Sketch from A to Z: for app designer",
      desc: "Proposal indulged no do sociable he throwing settling.",
      status: 1,
      created_at: "2025-03-01T10:00:00Z",
      updated_at: "2025-03-05T12:00:00Z",
      image: "https://themes.stackbros.in/eduport_ng/assets/images/courses/4by3/08.jpg",
    },
    {
      id: 2,
      name: "Graphic Design Masterclass",
      desc: "Rooms oh fully taken by worse do Points afraid.",
      status: 1,
      created_at: "2025-03-02T09:30:00Z",
      updated_at: "2025-03-06T11:15:00Z",
      image: "https://themes.stackbros.in/eduport_ng/assets/images/courses/4by3/02.jpg",
    },
    {
      id: 3,
      name: "Create a Design System in Figma",
      desc: "Rooms oh fully taken by worse do Points afraid.",
      status: 0,
      created_at: "2025-03-03T08:20:00Z",
      updated_at: "2025-03-07T10:45:00Z",
      image: "https://themes.stackbros.in/eduport_ng/assets/images/courses/4by3/03.jpg",
    },
    {
      id: 4,
      name: "Deep Learning with React Native",
      desc: "Far advanced settling say finished raillery.",
      status: 1,
      created_at: "2025-03-04T07:10:00Z",
      updated_at: "2025-03-08T09:30:00Z",
      image: "https://themes.stackbros.in/eduport_ng/assets/images/courses/4by3/07.jpg",
    },
    {
      id: 5,
      name: "Build Responsive Websites with HTML",
      desc: "Far advanced settling say finished raillery. Offered chiefly farther.",
      status: 1,
      created_at: "2025-03-05T06:00:00Z",
      updated_at: "2025-03-09T08:20:00Z",
      image: "https://themes.stackbros.in/eduport_ng/assets/images/courses/4by3/04.jpg",
    },
    {
      id: 6,
      name: "Build Websites with CSS",
      desc: "Far advanced settling say finished raillery. Offered chiefly farther.",
      status: 0,
      created_at: "2025-03-06T05:45:00Z",
      updated_at: "2025-03-10T07:10:00Z",
      image: "https://themes.stackbros.in/eduport_ng/assets/images/courses/4by3/05.jpg",
    },
    {
      id: 7,
      name: "Learn Invision",
      desc: "Arrived off she elderly beloved him Course regard to up he hardly.",
      status: 1,
      created_at: "2025-03-07T04:30:00Z",
      updated_at: "2025-03-11T06:00:00Z",
      image: "https://themes.stackbros.in/eduport_ng/assets/images/courses/4by3/06.jpg",
    },
    {
      id: 8,
      name: "JavaScript: Full Understanding",
      desc: "Far advanced settling say finished raillery. Offered chiefly farther.",
      status: 1,
      created_at: "2025-03-08T03:15:00Z",
      updated_at: "2025-03-12T05:30:00Z",
      image: "https://themes.stackbros.in/eduport_ng/assets/images/courses/4by3/01.jpg",
    }
  ];

  return (
    <DashboardLayout>
      <div className="py-5 text-white overflow-x-hidden my-bg-dark">
        <div className="row">
          <div className="col-sm-10 mx-auto">

            {/* Title */}
            <div className="text-center mb-4">
              <h1 className="fw-bold">Master Courses</h1>
              <p className="text-secondary">
                Choose from hundreds of courses from specialist organizations
              </p>
            </div>

            {/* Cards */}
            <div className="row">
              {masterCourses.map((course) => (
                  <MasterCourseCard
                    key={course.id}
                    {...course}
                    onEdit={(id) => console.log("Edit", id)}
                    onDelete={(id) => console.log("Delete", id)}
                  />
                ))}
            </div>

          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default MasterCourse