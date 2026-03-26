import { useEffect, useState } from "react";
import DashboardLayout from "../../layout/DashboardLayout";
import MasterCourseCard from "../../components/admin/MasterCourseCard";
import { getMasterCourse, deleteMasterCourse } from "../../services";
import { useNavigate } from "react-router-dom";
import { confirmAction, showALert } from "../../utils/index";

const MasterCourseList = () => {
  const navigate = useNavigate();
  const [masterCourses, setMasterCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleEditCourse = (id: any) => {
    navigate(`/admin/create-master-course?id=${id}`);
  };

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
    const confirmed = await confirmAction("You want to delete this master course?");
    if (!confirmed) return;
    try {
      await deleteMasterCourse(id);
      fetchCourses()
      showALert("Deleted", "Master course removed successfully", "success");
    } catch (err) {
      console.error("Failed to delete master course:", err);
      showALert("Error", "Unable to delete course, please try again", "error");
    }
  };

const handleToggleCourseStatus = async () => {
  showALert();
}

  return (
    <DashboardLayout>
      <div className="container-fluid py-3 px-4 overflow-hidden my-bg-dark">
        <div className="row">
          <div className="col-12 mx-auto">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="fw-bold m-0">Master Course</h2>
            </div>

            {loading && <p className="text-white">Loading courses...</p>}
            {error && <p className="text-danger">{error}</p>}

            {/* Cards */}
            <div className="row g-4">
              {Array.isArray(masterCourses) && masterCourses.length > 0 ? (
                masterCourses.map((course) => (
                  <div
                    key={course.id}
                    className="col-12 col-sm-6 col-lg-4 col-xl-3"
                  >
                    <MasterCourseCard
                      {...course}
                      onEdit={handleEditCourse}
                      onDelete={handleDeleteCourse}
                      onToggleStatus={handleToggleCourseStatus}
                    />
                  </div>
                ))
              ) : (
                !loading && (
                  <div className="col-12">
                    <p className="text-white">No courses available</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MasterCourseList;