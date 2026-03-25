import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

// Schema
const schema = yup.object().shape({
  type: yup.string().required("Please select a type"),

  email: yup.string().when("type", {
    is: "email",
    then: (schema) =>
      schema
        .required("Email is required")
        .email("Invalid email format"),
    otherwise: (schema) => schema.notRequired(),
  }),

  mobile: yup.string().when("type", {
    is: "mobile",
    then: (schema) =>
      schema
        .required("Mobile is required")
        .matches(/^[6-9]\d{9}$/, "Invalid mobile number"),
    otherwise: (schema) => schema.notRequired(),
  }),
});

const ResetPasswordForm = () => {
  const [type, setType] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      type: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Reset Data:", data);
    reset();
  };

  return (
    <div className="container-fluid py-3 px-4 overflow-hidden">
      <div className="row">
        <div className="col-12 mx-auto">
          <h2 className="fw-bold text-white">Reset Password</h2>

          <div className="form-section-card">
            <form onSubmit={handleSubmit(onSubmit)}>

              <div className="row">
                {/* Select Type */}
                <div className="col-lg-4 mb-4">
                  <label className="form-label-premium">Select Type *</label>
                  <select
                    {...register("type")}
                    className="form-control-premium w-100"
                    onChange={(e) => {
                      const value = e.target.value;
                      setType(value || null);
                      setValue("type", value);

                      // reset other field when switching
                      setValue("email", "");
                      setValue("mobile", "");
                    }}
                  >
                    <option value="">-- Select --</option>
                    <option value="email">Email</option>
                    <option value="mobile">Mobile</option>
                  </select>

                  {errors.type && (
                    <small className="text-danger mt-1 d-block">
                      {errors.type.message}
                    </small>
                  )}
                </div>

                {/* Email Input */}
                {type === "email" && (
                  <div className="col-lg-4 mb-4">
                    <label className="form-label-premium">Email *</label>
                    <input
                      type="email"
                      {...register("email")}
                      className="form-control-premium w-100"
                      placeholder="Enter email"
                    />
                    {errors.email && (
                      <small className="text-danger mt-1 d-block">
                        {errors.email.message}
                      </small>
                    )}
                  </div>
                )}

                {/* Mobile Input */}
                {type === "mobile" && (
                  <div className="col-lg-4 mb-4">
                    <label className="form-label-premium">Mobile *</label>
                    <input
                      type="text"
                      {...register("mobile")}
                      className="form-control-premium w-100"
                      placeholder="Enter mobile number"
                    />
                    {errors.mobile && (
                      <small className="text-danger mt-1 d-block">
                        {errors.mobile.message}
                      </small>
                    )}
                  </div>
                )}
              </div>

              {/* Buttons */}
              <div className="row align-items-end">
                <div className="col-lg-12 mb-4 d-flex justify-content-end gap-2">
                  <button
                    type="button"
                    className="btn btn-cancel"
                    onClick={() => {
                      reset();
                      setType(null);
                    }}
                  >
                    Cancel
                  </button>

                  <button type="submit" className="btn btn-submit">
                    Reset Password
                  </button>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordForm;