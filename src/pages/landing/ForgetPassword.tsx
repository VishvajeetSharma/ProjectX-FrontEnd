import ResetPasswordForm from "../../components/common/ResetPasswordForm";
import { resetPassword } from "../../services";
import { showALert } from "../../utils";



const ForgetPassword = () => {

  const handleFormData = async (data: any) => {
    try {
      console.log("Data from child form:", data);
      const res = await resetPassword(data)
      if (res.success) {
        showALert("Forget Password", res.message, "success")
        
      } else {
        showALert("Forget Password", res.message, "error")
      }
    } catch (err: any) {
      showALert("Forget Password", "Internal Server Error", "error")
    }
  };

  return (

    <div className="container-fluid py-3 px-4 overflow-hidden">
      <div className="row">
        <div className="col-lg-12 mx-auto">
          <h2 className="fw-bold">Reset Password</h2>
          <ResetPasswordForm onSubmit={handleFormData} />
        </div>
      </div>
    </div>
  )
}

export default ForgetPassword