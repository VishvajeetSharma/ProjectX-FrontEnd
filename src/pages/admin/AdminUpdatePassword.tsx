import UpdatePasswordForm from "../../components/common/UpdatePasswordForm"
import DashboardLayout from "../../layout/DashboardLayout"


const AdminUpdatePassword = () => {

  const handleFormData = (data: any) => {
    console.log("Data from child form:", data);
    // API call
  };

  return (
    <DashboardLayout>
      <div className="container-fluid py-3 px-4 overflow-hidden">
        <div className="row">
          <div className="col-lg-12 mx-auto">
            <h2 className="fw-bold">Update Password</h2>
            <UpdatePasswordForm onSubmit={handleFormData} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default AdminUpdatePassword;