import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createMasterPlan } from "../../services";
import { showALert } from "../../utils";

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

  price: yup
    .number()
    .typeError("Price must be a number")
    .required("Price is required")
    .positive("Must be a positive number")
    .integer("Must be an integer"),

  offer: yup
    .number()
    .typeError("Offer must be a number")
    .required("Offer is required")
    .positive("Must be a positive number")
    .integer("Must be an integer"),

  duration: yup
    .number()
    .typeError("Duration must be a number")
    .required("Duration is required")
    .positive("Must be a positive number")
    .integer("Must be an integer"),

  is_rec: yup
    .number()
    .oneOf([0, 1], "Invalid recomendation")
    .default(1),

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

  const onSubmit = async (data: any) => {
    try {
      const res = await createMasterPlan(data);
      if (res.success) {
        showALert("Master Plan", res?.message, "success");
        1
      } else {
        showALert("Master Plan", res?.message, "error");
      }
    } catch (error) {
      showALert("Master Plan", "Internal server error", "error");
    }
  };

  return (
    <div className="container-fluid overflow-hidden p-0">
      <div className="row my-bg-dark py-5 px-3">
      <div className="col-sm-10 mx-auto">
        <div className="card my-second-bg-dark text-white p-4 border-0 rounded-4 shadow-lg">
          <h2 className="fw-bold mb-4 text-center">Create Master Plan</h2>

          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="row">
              <div className="col-sm-6">
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
              </div>
              <div className="col-sm-6">
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
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
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
              </div>
              <div className="col-sm-6">
                {/* Price */}
                <div className="mb-3">
                  <label className="form-label">Price *</label>
                  <input
                    type="text"
                    {...register("price")}
                    className="form-control border-0"
                    placeholder="Enter price"
                  />
                  {errors.price && (
                    <small className="text-danger">
                      {errors.price.message}
                    </small>
                  )}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                {/* Offer */}
                <div className="mb-3">
                  <label className="form-label">Offer *</label>
                  <input
                    type="text"
                    {...register("offer")}
                    className="form-control border-0"
                    placeholder="Enter offer"
                  />
                  {errors.offer && (
                    <small className="text-danger">
                      {errors.offer.message}
                    </small>
                  )}
                </div>
              </div>
              <div className="col-sm-6">
                {/* Duration */}
                <div className="mb-3">
                  <label className="form-label">Duration *</label>
                  <input
                    type="text"
                    {...register("duration")}
                    className="form-control border-0"
                    placeholder="Enter duration"
                  />
                  {errors.duration && (
                    <small className="text-danger">
                      {errors.duration.message}
                    </small>
                  )}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                {/* Is Recommended */}
                <div className="mb-3">
                  <label className="form-label">Recommended *</label>
                  <select
                    {...register("is_rec")}
                    className="form-control border-0"
                  >
                    <option value={0}>False</option>
                    <option value={1}>True</option>
                  </select>
                  {errors.is_rec && (
                    <small className="text-danger">
                      {errors.is_rec.message}
                    </small>
                  )}
                </div>
              </div>
              <div className="col-sm-6">

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
              </div>
            </div>

            {/* Button */}
            <button className="btn my-btn w-100 py-2 mt-4 fw-bold">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
};

export default MasterPlanForm;