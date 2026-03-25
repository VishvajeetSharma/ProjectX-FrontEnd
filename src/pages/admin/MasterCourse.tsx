import { useEffect, useState } from "react";
import DashboardLayout from "../../layout/DashboardLayout";
import MasterCourseCard from "./MasterCourseCard";
import { getMasterCourse } from "../../services";

const handleEditCourse = (id: any) => {
  console.log('Edit course', id);
};

const handleDeleteCourse = (id: any) => {
  console.log('Delete course', id);
};

const handleToggleCourseStatus = (id: any, currentStatus: any) => {
  console.log('Toggle status for course', id, currentStatus);
};

const MasterCourse = () => {
  const [masterCourses, setMasterCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const data = await getMasterCourse();
      setMasterCourses(data?.result);
      setError(null);
    } catch (err) {
      console.error("Failed to fetch courses:", err);
      setError("Failed to load courses");
      setMasterCourses([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>

      <div className="container-fluid py-3 px-4 overflow-hidden my-bg-dark">
        <div className="row">
          <div className="col-12 mx-auto">
            <h2 className="fw-bold text-white">Master Course</h2>

            {loading && <p className="text-white">Loading courses...</p>}
            {error && <p className="text-danger">{error}</p>}

            {/* Cards */}
            <div className="row g-4">
              {Array.isArray(masterCourses) && masterCourses.length > 0 ? (
                masterCourses.map((course) => (
                  <MasterCourseCard
                    key={course.id}
                    {...course}
                    onEdit={(id) => handleEditCourse(id)}
                    onDelete={(id) => handleDeleteCourse(id)}
                    onToggleStatus={(id, status) => handleToggleCourseStatus(id, status)}
                  />
                ))
              ) : (
                !loading && <p className="text-white">No courses available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MasterCourse;