
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// ✅ Validation Schema
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
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);

    alert("Form Submitted Successfully");
    reset();
  };

  return (
    <div className="card bg-dark text-white p-4 border-0 rounded-4 shadow-lg">
      <h2 className="fw-bold mb-4">Register Yourself</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <div className="mb-3">
          <label className="form-label">Name *</label>
          <input
            type="text"
            {...register("name")}
            className="form-control bg-secondary border-0 text-white"
            placeholder="Enter your name"
          />
          {errors.name && (
            <small className="text-danger">{errors.name.message}</small>
          )}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email *</label>
          <input
            type="email"
            {...register("email")}
            className="form-control bg-secondary border-0 text-white"
            placeholder="Enter your email"
          />
          {errors.email && (
            <small className="text-danger">{errors.email.message}</small>
          )}
        </div>

        {/* Mobile */}
        <div className="mb-3">
          <label className="form-label">Mobile number *</label>
          <input
            type="text"
            {...register("mobile")}
            className="form-control bg-secondary border-0 text-white"
            placeholder="Enter your number"
          />
          {errors.mobile && (
            <small className="text-danger">{errors.mobile.message}</small>
          )}
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="form-label">Password *</label>
          <input
            type="password"
            {...register("password")}
            className="form-control bg-secondary border-0 text-white"
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
          Book a class
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;