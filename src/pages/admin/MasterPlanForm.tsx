import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Schema
const schema = yup.object().shape({
  name: yup
    .string()
    .required("Master Plan Name is required")
    .matches(/\S/, "Only spaces not allowed")
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters"),

  desc: yup
    .string()
    .required("Description is required")
    .min(5, "Minimum 5 characters")
    .max(255, "Maximum 255 characters"),

  credit: yup
    .number()
    .typeError("Credit must be a number")
    .required("Credit is required")
    .positive("Must be a positive number")
    .integer("Must be an integer"),

  status: yup
    .number()
    .oneOf([0, 1], "Invalid status")
    .default(1),
});

const MasterPlanForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      status: 1,
    },
  });

  const onSubmit = (data: any) => {
    console.log("Master Plan Data:", data);
  };

  return (
    <div className="row my-bg-dark p-5">
      <div className="col-sm-10 mx-auto">
        <div className="card my-second-bg-dark text-white p-4 border-0 rounded-4 shadow-lg">
          <h2 className="fw-bold mb-4 text-center">Create Master Plan</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <div className="mb-3">
              <label className="form-label">Master Plan Name *</label>
              <input
                type="text"
                {...register("name")}
                className="form-control border-0"
                placeholder="Enter your name"
              />
              {errors.name && (
                <small className="text-danger">{errors.name.message}</small>
              )}
            </div>

            {/* Description */}
            <div className="mb-3">
              <label className="form-label">Description *</label>
              <input
                type="text"
                {...register("desc")}
                className="form-control border-0"
                placeholder="Enter description"
              />
              {errors.desc && (
                <small className="text-danger">{errors.desc.message}</small>
              )}
            </div>

            {/* Credit */}
            <div className="mb-3">
              <label className="form-label">Credit *</label>
              <input
                type="text"
                {...register("credit")}
                className="form-control border-0"
                placeholder="Enter credit"
              />
              {errors.credit && (
                <small className="text-danger">
                  {errors.credit.message}
                </small>
              )}
            </div>

           {/* Status */}
            <div className="mb-3">
              <label className="form-label">Status *</label>
              <select
                {...register("status")}
                className="form-control border-0"
              >
                <option value={1}>Active</option>
                <option value={0}>Inactive</option>
              </select>
              {errors.status && (
                <small className="text-danger">
                  {errors.status.message}
                </small>
              )}
            </div>

            {/* Button */}
            <button className="btn my-btn w-100 py-2 mt-4 fw-bold">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MasterPlanForm;