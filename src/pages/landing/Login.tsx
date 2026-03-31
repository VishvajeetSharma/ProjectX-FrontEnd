import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { userLoginService } from "../../services";
import { showALert } from "../../utils";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuth } from "../../redux/slices/authSlice";
import Navbar from "../../components/landing/Navbar";
import Footer from "../../components/landing/Footer";
import { useContext } from "react";
import { UserContext } from "../../context/user/UserContext";

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
    .max(15, "Maximum 15 characters"),
});



const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {setUser}: any = useContext(UserContext)
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
      const res = await userLoginService(data);
      if (res.success) {
        showALert("User Login", res?.message, "success")
        dispatch(setAuth({ token: res?.result?.token, userType: "user" }));
        setUser(res?.result)
        navigate('/user-dashboard');
        reset()
      } else {
        showALert("User Login", res?.message, "error")
      }
    } catch (err) {
      showALert("User Login", "Internal Server Error", "error")
    }
  };
  return (
    <>
      <Navbar />
      <div className="row align-items-center py-5 my-bg-dark">
        <div className="col-sm-10 mx-auto">
          <div className="row">

            {/* LEFT SIDE */}
            <div className="col-lg-6">
              <h1 className="access-title">
                Login Your<br /> Account
              </h1>

              <p className="mt-3 access-subtext">
                Enter your email address and password to get access
              </p>

              {/* INPUT */}
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Email */}
                <div className="mb-3">
                  <label className="form-label-premium">Email *</label>
                  <input
                    type="email"
                    {...register("email")}
                    className="form-control-premium w-100"
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <small className="text-danger">{errors.email.message}</small>
                  )}
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label className="form-label-premium">Password *</label>
                  <input
                    type="password"
                    {...register("password")}
                    className="form-control-premium w-100"
                    placeholder="Enter your password"
                  />
                  {errors.password && (
                    <small className="text-danger">
                      {errors.password.message}
                    </small>
                  )}
                </div>

                {/* Button */}
                <button className="my-btn w-100 py-2 mt-3 fw-bold">
                  Login
                </button>
              </form>
              <div className="text-end mt-4 gap-4 flex-wrap">
                <NavLink to="/forget-password" >Forget password</NavLink>
              </div>


              {/* USERS + RATING */}
              <div className="d-flex align-items-center mt-4 gap-4 flex-wrap">

                {/* AVATARS */}
                <div className="avatars d-flex align-items-center">
                  <img src="https://i.pravatar.cc/40?img=1" className="rounded-circle me-1" />
                  <img src="https://i.pravatar.cc/40?img=2" className="rounded-circle me-1" />
                  <img src="https://i.pravatar.cc/40?img=3" className="rounded-circle me-1" />
                  <img src="https://i.pravatar.cc/40?img=4" className="rounded-circle me-1" />
                  <img src="https://i.pravatar.cc/40?img=5" className="rounded-circle me-1" />
                  <span className="count">1K+</span>
                </div>

                {/* RATING */}
                <div className="rating">
                  <strong>4.5/5.0</strong>
                  <span className="stars ms-2">★★★★★</span>
                </div>
              </div>

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

export default Login
