
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
  confirmPassword: yup.string().
});

const UpdatePasswordForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (data: any) => {
    onSubmit(data); // Send data to parent
  };

  return (
<div className="form-section-card">
  <form onSubmit={handleSubmit(handleFormSubmit)}>
    <div className="row">
      {/* Passwords Column */}
      <div className="col-lg-4 mx-auto mb-4">
        {/* Old Password */}
        <div className="mb-4">
          <label className="form-label-premium">Old Password *</label>
          <input
            type="password"
            {...register("oldPassword")}
            className="form-control-premium w-100"
            placeholder="Enter old password"
          />
          <small className="text-danger mt-1 d-block">
            {errors.oldPassword?.message}
          </small>
        </div>

        {/* New Password */}
        <div className="mb-4">
          <label className="form-label-premium">New Password *</label>
          <input
            type="password"
            {...register("newPassword")}
            className="form-control-premium w-100"
            placeholder="Enter new password"
          />
          <small className="text-danger mt-1 d-block">
            {errors.newPassword?.message}
          </small>
        </div>
        <div className="mb-4">
          <label className="form-label-premium">Confirm Password *</label>
          <input
            type="password"
            {...register("confirmPassword")}
            className="form-control-premium w-100"
            placeholder="Enter new password"
          />
          <small className="text-danger mt-1 d-block">
            {errors.newPassword?.message}
          </small>
        </div>
      </div>

     
    </div>

    {/* Buttons */}
    <div className="row">
      <div className="col-10 d-flex justify-content-end gap-2">
        <button type="button" className="btn btn-cancel" onClick={() => reset()}>
          Cancel
        </button>
        <button type="submit" className="btn btn-submit">
          Update Password
        </button>
      </div>
    </div>
  </form>
</div>
  );
};

export default UpdatePasswordForm;