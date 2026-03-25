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
];

const MasterCourse = () => {

  return (
    <DashboardLayout>
      <div className="py-3 text-white overflow-x-hidden my-bg-dark">
        <div className="row px-4">
          <div className="col-12">
            {/* Title */}
            <div className="text-start mb-4">
              <h1 className="fw-bold">Master Courses</h1>
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