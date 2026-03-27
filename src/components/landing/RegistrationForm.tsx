
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { userRegisterService } from "../../services"; 
import { showALert } from "../../utils";
import { useNavigate } from "react-router-dom";

//  Validation Schema
const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .matches(/\S/, "Only spaces not allowed")
    .min(3, "Minimum 3 characters")
    .max(18, "Maximum 18 characters"),

  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format")
    .min(10, "Too short")
    .max(40, "Too long"),

  mobile: yup
    .string()
    .required("Mobile number is required")
    .matches(/^[0-9]{10}$/, "Must be exactly 10 digits"),

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

const RegistrationForm = () => {
  const navigate =useNavigate()
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
      const res = await userRegisterService(data);
      if (res.success) {
        showALert("User Regiser", res?.message, "success")
        reset()
        navigate('/login')
      } else {
        showALert("User Regiser", res?.message, "error")
      }
    } catch (error) {
      showALert("User Regiser", "Internal Server error", "error")
    }
  };

  return (
    <div className="form-section-card">
      <h2 className="fw-bold mb-4">Register Yourself</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <div className="mb-3">
          <label className="form-label-premium">Name *</label>
          <input
            type="text"
            {...register("name")}
            className="form-control-premium w-100"
            placeholder="Enter your name"
          />
          {errors.name && (
            <small className="text-danger">{errors.name.message}</small>
          )}
        </div>

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

        {/* Mobile */}
        <div className="mb-3">
          <label className="form-label-premium">Mobile number *</label>
          <input
            type="text"
            {...register("mobile")}
            className="form-control-premium w-100"
            placeholder="Enter your number"
          />
          {errors.mobile && (
            <small className="text-danger">{errors.mobile.message}</small>
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
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;