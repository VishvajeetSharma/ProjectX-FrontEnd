import { useEffect, useState } from "react";
import DashboardLayout from "../../layout/DashboardLayout";
import MasterCourseCard from "./MasterCourseCard";
import { getMasterCourse, deleteMasterCourse } from "../../services";
import { confirmDeletion, showALert } from "../../utils";

const handleEditCourse = (id: any) => {
  console.log('Edit course', id);
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
      setMasterCourses(data?.result || []);
      setError(null);
    } catch (err) {
      console.error("Failed to fetch courses:", err);
      setError("Failed to load courses");
      setMasterCourses([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCourse = async (id: any) => {
    const confirmed = await confirmDeletion('master course');
    if (!confirmed) return;

    try {
      await deleteMasterCourse(id);
      setMasterCourses((prev) => prev.filter((course) => course.id !== id));
      showALert('Deleted', 'Master course removed successfully', 'success');
    } catch (err) {
      console.error('Failed to delete master course:', err);
      showALert('Error', 'Unable to delete course, please try again', 'error');
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