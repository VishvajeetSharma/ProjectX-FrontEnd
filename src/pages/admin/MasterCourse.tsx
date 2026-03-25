import { useEffect, useState } from "react";
import DashboardLayout from "../../layout/DashboardLayout";
import MasterCourseCard from "./MasterCourseCard";
import { getMasterCourse, deleteMasterCourse, updateMasterCourse } from "../../services";
import { confirmDeletion, showALert } from "../../utils";
import { useNavigate } from "react-router-dom";

const MasterCourse = () => {
  const navigate = useNavigate();
  const [masterCourses, setMasterCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleEditCourse = (id: any) => {
    navigate(`/admin/create-master-course?id=${id}`);
  };

  const handleToggleCourseStatus = async (id: any, currentStatus: any) => {
    const newStatus = currentStatus === 1 ? 0 : 1;
    try {
      // Create a FormData object for the update since the backend expects it
      const formData = new FormData();
      formData.append("status", newStatus.toString());
      
      const res = await updateMasterCourse(id, formData);
      if (res.success) {
        setMasterCourses((prev) => 
          prev.map((c) => (c.id === id ? { ...c, status: newStatus } : c))
        );
        showALert("Status Updated", `Course is now ${newStatus === 1 ? 'Active' : 'Inactive'}`, "success");
      }
    } catch (err) {
      console.error("Failed to toggle status:", err);
      showALert("Error", "Failed to update status", "error");
    }
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
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="fw-bold m-0">Master Course</h2>
            </div>

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