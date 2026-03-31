import ResetPasswordForm from "../../components/common/ResetPasswordForm";
import { userForgetPasswordService } from "../../services";
import { showALert } from "../../utils";



const ForgetPassword = () => {

  const handleFormData = async (data: any) => {
    try {
      const res = await userForgetPasswordService({ email: data.email });
      if (res.success) {
        showALert("Forget Password", res.message, "success");
      } else {
        showALert("Forget Password", res.message, "error");
      }
    } catch (err: any) {
      showALert("Forget Password", err?.response?.data?.message || "Internal Server Error", "error");
    }
  };

  return (

    <div className=" container-fluid py-3 px-4 overflow-hidden">
      
          <ResetPasswordForm onSubmit={handleFormData} />
       
    </div>
  )
}

export default ForgetPassword