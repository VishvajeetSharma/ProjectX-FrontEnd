
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { adminLoginService } from "../../services";
import { showALert } from "../../utils";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuth } from "../../redux/slices/authSlice";
import Navbar from "./Navbar";
import Footer from "./Footer";


//  Validation Schema
const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format")
    .min(10, "Too short")
    .max(40, "Too long"),

  password: yup
    .string()
    .required("Password is required")
    .min(6, "Minimum 6 characters")
    .max(15, "Maximum 15 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)/,
      "Must contain letters & numbers"
    ),
});



const AdminLogin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      const res = await adminLoginService(data);
      if (res.success) {
        showALert("Admin Login", res?.message, "success")
        dispatch(setAuth({ token: res?.result?.token, userType: "admin" }));
        navigate('/admin-dashboard');
        reset()
      } else {
        showALert("Admin Login", res?.message, "error")
      }
    } catch (err) {
      showALert("Admin Login", "Internal Server Error", "error")
    }
  };
  return (
    <>
      <Navbar />
      <div className="row align-items-center py-5 my-bg-dark">
        <div className="col-sm-10 mx-auto">
          <div className="row">

            {/* LEFT SIDE */}
            <div className="col-lg-6 text-white">
              <h1 className="access-title">
                Admin Login
              </h1>

              <p className="mt-3 access-subtext">
                Enter your email address and password to get access
              </p>

              {/* INPUT */}
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Email */}
                <div className="mb-3">
                  <label className="form-label-premium text-dark">Email *</label>
                  <input
                    type="email"
                    {...register("email")}
                    className="form-control border-0"
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <small className="text-danger">{errors.email.message}</small>
                  )}
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label className="form-label-premium text-dark">Password *</label>
                  <input
                    type="password"
                    {...register("password")}
                    className="form-control border-0"
                    placeholder="Enter your password"
                  />
                  {errors.password && (
                    <small className="text-danger">
                      {errors.password.message}
                    </small>
                  )}
                </div>

                {/* Button */}
                <button className="btn btn-primary w-100 py-2 mt-4 fw-bold">
                  Login
                </button>
              </form>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="col-lg-6 text-center mt-5 mt-lg-0">
              <img
                src="https://themes.stackbros.in/eduport_ng/assets/images/element/16.svg"
                alt="illustration"
                className="img-fluid access-img"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AdminLogin
