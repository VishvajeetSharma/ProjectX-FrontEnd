import DashboardLayout from "../../layout/DashboardLayout";
import MasterPlanCard from "./MasterPlanCard";


const Subject = () => {

  const subjects = [
    {
      id: 1,
      name: "Mathematics",
      desc: "Covers algebra, calculus, and geometry.",
      credit: 4,
      status: 1,
      created_at: "2025-03-01T10:00:00Z",
      updated_at: "2025-03-05T12:00:00Z",
      image: "https://themes.stackbros.in/eduport_ng/assets/images/courses/4by3/01.jpg",
    },
    {
      id: 2,
      name: "Physics",
      desc: "Study of motion, energy, and force.",
      credit: 3,
      status: 1,
      created_at: "2025-03-02T10:00:00Z",
      updated_at: "2025-03-06T12:00:00Z",
      image: "https://themes.stackbros.in/eduport_ng/assets/images/courses/4by3/01.jpg",
    },
    {
      id: 3,
      name: "Chemistry",
      desc: "Chemical reactions and compounds.",
      credit: 2,
      status: 0,
      created_at: "2025-03-03T10:00:00Z",
      updated_at: "2025-03-07T12:00:00Z",
      image: "https://themes.stackbros.in/eduport_ng/assets/images/courses/4by3/01.jpg",
    },
    {
      id: 4,
      name: "Computer Science",
      desc: "Programming and algorithms basics.",
      credit: 5,
      status: 1,
      created_at: "2025-03-04T10:00:00Z",
      updated_at: "2025-03-08T12:00:00Z",
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
              <h1 className="fw-bold">Master Plan</h1>
              <p className="text-secondary">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, explicabo.
              </p>
            </div>

            {/* Cards */}
            <div className="row">
              {subjects.map((sub) => (
                <MasterPlanCard
                  key={sub.id}
                  {...sub}
                  onEdit={(id) => console.log("Edit Subject", id)}
                  onDelete={(id) => console.log("Delete Subject", id)}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Subject;