import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { userLoginService } from "../../services";
import { showALert, stroreData } from "../../utils";
import { useNavigate } from "react-router-dom";

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



const Login = () => {
  const navigate = useNavigate()
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
        console.log(res,"#############");
        stroreData("token",res?.result?.token)
        stroreData("userType", "user");
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
      <div className="row align-items-center py-5 my-bg-dark">
        <div className="col-sm-10 mx-auto">
          <div className="row">

            {/* LEFT SIDE */}
            <div className="col-lg-6 text-white">
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
                  <label className="form-label">Email *</label>
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
                  <label className="form-label">Password *</label>
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
              {/* USERS + RATING */}
              <div className="d-flex align-items-center mt-4 gap-4 flex-wrap">

                {/* AVATARS */}
                <div className="avatars d-flex align-items-center">
                  <img src="https://i.pravatar.cc/40?img=1" />
                  <img src="https://i.pravatar.cc/40?img=2" />
                  <img src="https://i.pravatar.cc/40?img=3" />
                  <img src="https://i.pravatar.cc/40?img=4" />
                  <img src="https://i.pravatar.cc/40?img=5" />
                  <span className="count">1K+</span>
                </div>

                {/* RATING */}
                <div className="rating text-white">
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

    </>
  )
}

export default Login
