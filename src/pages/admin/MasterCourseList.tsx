import { useEffect, useState } from "react";
import CourseCard from "../../components/admin/CourseCard";
import { getMasterCourse, deleteMasterCourse, updateMasterCourse } from "../../services";
import DashboardLayout from "../../layout/DashboardLayout";

const MasterCourseList = () => {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // FETCH COURSES
  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const res = await getMasterCourse();
      setCourses(res?.result || []);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Failed to load courses");
      setCourses([]);
    } finally {
      setLoading(false);
    }
  };

  // EDIT
  const handleEdit = (id: number) => {
    alert(`Edit course with id: ${id}`);
    // or navigate(`/edit-course?id=${id}`)
  };

  // DELETE
  const handleDelete = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this course?")) return;

    try {
      await deleteMasterCourse(id);
      setCourses((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete course");
    }
  };

  // TOGGLE STATUS
  const handleToggleStatus = async (id: number) => {
    const course = courses.find((c) => c.id === id);
    if (!course) return;

    const newStatus = course.status === 1 ? 0 : 1;

    try {
      const formData = new FormData();
      formData.append("status", newStatus.toString());

      const res = await updateMasterCourse(id, formData);

      if (res.success) {
        setCourses((prev) =>
          prev.map((c) =>
            c.id === id ? { ...c, status: newStatus } : c
          )
        );
      }
    } catch (err) {
      console.error(err);
      alert("Failed to update status");
    }
  };

  return (
    <DashboardLayout>
      <div
        style={{
          display: "grid",
          gap: "24px",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          padding: "24px",
        }}
      >
        {loading && <p>Loading courses...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {!loading && courses.length === 0 && <p>No courses found</p>}

        {courses.map((course, index) => (
          <CourseCard
            key={course.id}
            {...course}
            index={index}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onToggleStatus={handleToggleStatus}
          />
        ))}
      </div>
    </DashboardLayout>
  );
}

export default MasterCourseList