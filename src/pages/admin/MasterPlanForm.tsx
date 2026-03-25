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
      } else {
        showALert("Master Plan", res?.message, "error");
      }
    } catch (error) {
      showALert("Master Plan", "Internal server error", "error");
    }
  };

  return (
    <div className="container-fluid py-3 px-4 overflow-hidden">
      <div className="row">
        <div className="col-12 mx-auto">
          <h2 className="fw-bold text-white">Create Master Plan</h2>
          <div className="form-section-card">

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-lg-4 mb-4">
                  {/* Name */}
                  <label className="form-label-premium">Master Plan Name *</label>
                  <input
                    type="text"
                    {...register("name")}
                    className="form-control-premium w-100"
                    placeholder="Enter plan name"
                  />
                  {errors.name && (
                    <small className="text-danger mt-1 d-block">{errors.name.message}</small>
                  )}
                </div>

                <div className="col-lg-4 mb-4">
                  {/* Credit */}
                  <label className="form-label-premium">Credit Allocation *</label>
                  <input
                    type="text"
                    {...register("credit")}
                    className="form-control-premium w-100"
                    placeholder="Number of credits"
                  />
                  {errors.credit && (
                    <small className="text-danger mt-1 d-block">{errors.credit.message}</small>
                  )}
                </div>

                <div className="col-lg-4 mb-4">
                  {/* Price */}
                  <label className="form-label-premium">Plan Price (INR) *</label>
                  <input
                    type="text"
                    {...register("price")}
                    className="form-control-premium w-100"
                    placeholder="Enter price"
                  />
                  {errors.price && (
                    <small className="text-danger mt-1 d-block">{errors.price.message}</small>
                  )}
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4 mb-4">
                  {/* Offer */}
                  <label className="form-label-premium">Discount Offer (%) *</label>
                  <input
                    type="text"
                    {...register("offer")}
                    className="form-control-premium w-100"
                    placeholder="Discount percentage"
                  />
                  {errors.offer && (
                    <small className="text-danger mt-1 d-block">{errors.offer.message}</small>
                  )}
                </div>

                <div className="col-lg-4 mb-4">
                  {/* Duration */}
                  <label className="form-label-premium">Validity Duration (Days) *</label>
                  <input
                    type="text"
                    {...register("duration")}
                    className="form-control-premium w-100"
                    placeholder="Days of validity"
                  />
                  {errors.duration && (
                    <small className="text-danger mt-1 d-block">{errors.duration.message}</small>
                  )}
                </div>

                <div className="col-lg-4 mb-4">
                  {/* Is Recommended */}
                  <label className="form-label-premium">Is Recommended? *</label>
                  <select
                    {...register("is_rec")}
                    className="form-control-premium w-100"
                  >
                    <option value={0}>False</option>
                    <option value={1}>True</option>
                  </select>
                  {errors.is_rec && (
                    <small className="text-danger mt-1 d-block">{errors.is_rec.message}</small>
                  )}
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4 mb-4">
                  {/* Status */}
                  <label className="form-label-premium">Active Status *</label>
                  <select
                    {...register("status")}
                    className="form-control-premium w-100"
                  >
                    <option value={1}>Active</option>
                    <option value={0}>Inactive</option>
                  </select>
                  {errors.status && (
                    <small className="text-danger mt-1 d-block">{errors.status.message}</small>
                  )}
                </div>
              </div>

              <div className="row align-items-end">
                {/* Description (Textarea) */}
                <div className="col-lg-8 mb-4">
                  <label className="form-label-premium">Plan Description *</label>
                  <textarea
                    {...register("desc")}
                    className="form-control-premium w-100"
                    placeholder="Enter plan description..."
                  ></textarea>
                  {errors.desc && (
                    <small className="text-danger mt-1 d-block">{errors.desc.message}</small>
                  )}
                </div>

                {/* Form Buttons */}
                <div className="col-lg-4 mb-4 d-flex justify-content-end gap-2">
                  <button type="button" className="btn btn-cancel">Cancel</button>
                  <button type="submit" className="btn btn-submit">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterPlanForm;