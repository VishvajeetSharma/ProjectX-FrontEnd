import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const schema = yup.object().shape({
  oldPassword: yup
    .string()
    .required("Old password is required"),

  newPassword: yup
    .string()
    .required("New password is required")
    .matches(
      passwordRegex,
      "Password must be 8+ chars, include uppercase, lowercase, number & special character"
    )
    .notOneOf([yup.ref("oldPassword")], "New password must be different"),
});

const UpdatePasswordForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log("Password Data:", data);
    reset();
  };

  return (
    <div className="container-fluid py-3 px-4 overflow-hidden">
      <div className="row">
        <div className="col-12 mx-auto">
          <h2 className="fw-bold text-white">Update Password</h2>

          <div className="form-section-card">
            <form onSubmit={handleSubmit(onSubmit)}>
              
              <div className="row">
                {/* Old Password */}
                <div className="col-lg-6 mb-4">
                  <label className="form-label-premium">
                    Old Password *
                  </label>
                  <input
                    type="password"
                    {...register("oldPassword")}
                    className="form-control-premium w-100"
                    placeholder="Enter old password"
                  />
                  {errors.oldPassword && (
                    <small className="text-danger mt-1 d-block">
                      {errors.oldPassword.message}
                    </small>
                  )}
                </div>

                {/* New Password */}
                <div className="col-lg-6 mb-4">
                  <label className="form-label-premium">
                    New Password *
                  </label>
                  <input
                    type="password"
                    {...register("newPassword")}
                    className="form-control-premium w-100"
                    placeholder="Enter new password"
                  />
                  {errors.newPassword && (
                    <small className="text-danger mt-1 d-block">
                      {errors.newPassword.message}
                    </small>
                  )}
                </div>
              </div>

              {/* Buttons */}
              <div className="row align-items-end">
                <div className="col-lg-12 mb-4 d-flex justify-content-end gap-2">
                  <button
                    type="button"
                    className="btn btn-cancel"
                    onClick={() => reset()}
                  >
                    Cancel
                  </button>

                  <button type="submit" className="btn btn-submit">
                    Update Password
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

export default UpdatePasswordForm;