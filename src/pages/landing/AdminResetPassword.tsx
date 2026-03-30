import ResetPasswordForm from "../../components/common/ResetPasswordForm";
import { adminForgetPasswordService } from "../../services";
import { showALert } from "../../utils";

const AdminResetPassword = () => {
  const handleFormData = async (data: any) => {
    try {
      const res = await adminForgetPasswordService({ email: data.email });
      if (res.success) {
        showALert("Admin Reset Password", res.message, "success");
      } else {
        showALert("Admin Reset Password", res.message, "error");
      }
    } catch (err: any) {
      showALert("Admin Reset Password", err?.response?.data?.message || "Internal Server Error", "error");
    }
  };

  return (
    <>
      
      <div className="container-fluid py-5 px-4 overflow-hidden">
        
            <ResetPasswordForm onSubmit={handleFormData} />
          
      </div>
    </>
  );
};

export default AdminResetPassword;
