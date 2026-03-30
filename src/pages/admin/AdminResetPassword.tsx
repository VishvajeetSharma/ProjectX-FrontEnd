import ResetPasswordForm from "../../components/common/ResetPasswordForm"
import DashboardLayout from "../../layout/DashboardLayout"


const AdminResetPassword = () => {

  const handleFormData = (data: any) => {
    console.log("Data from child form:", data);
    // API call
  };

  return (
    <DashboardLayout>
      <div className="container-fluid py-3 px-4 overflow-hidden">
        <div className="row">
          <div className="col-lg-12 mx-auto">
            <h2 className="fw-bold">Reset Password</h2>
            <ResetPasswordForm onSubmit={handleFormData} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default AdminResetPassword