import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { showALert } from "../../utils";
import { createMasterCourse } from "../../services";


const schema = yup.object().shape({
  title: yup.string().required("Title is required").min(3).max(100),

  desc: yup.string().required("Description is required").min(5).max(500),

  level: yup.string().required("Level is required"),

  rating: yup
    .number()
    .typeError("Rating must be a number")
    .required("Rating is required")
    .min(0)
    .max(5),

  duration: yup
    .number()
    .typeError("Duration must be a number")
    .required("Duration is required")
    .positive(),

  type: yup.string().required("Type is required"),

  status: yup.number().oneOf([0, 1]).default(1),

  thumbnail: yup.mixed().required("Thumbnail is required"),

  content: yup.mixed().required("Content file is required"),
});

const CreateCourseForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      status: 1,
    },
  });


  const onSubmit = async (data: any) => {
    try {
      console.log(data);

      const formData = new FormData();

      formData.append("title", data.title);
      formData.append("desc", data.desc);
      formData.append("level", data.level);
      formData.append("rating", data.rating);
      formData.append("duration", data.duration);
      formData.append("type", data.type);
      formData.append("status", data.status);

      formData.append("thumbnail", data.thumbnail[0]);
      formData.append("content", data.content[0]);


      const res = await createMasterCourse(formData);

      if (res.success) {
        showALert("Course", res.message, "success");
      } else {
        showALert("Course", res.message, "error");
      }
    } catch (error) {
      showALert("Course", "Internal server error", "error");
    }
  };

  return (
    <div className="container-fluid py-4 px-4 overflow-hidden">
      <div className="row">
        <div className="col-12 mx-auto">
          <div className="form-section-card">
            <h4 className="fw-bold mb-4 text-white">Create Master Course</h4>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                {/* Title */}
                <div className="col-lg-4 mb-4">
                  <label className="form-label-premium">Course Title *</label>
                  <input
                    type="text"
                    {...register("title")}
                    className="form-control-premium w-100"
                    placeholder="Enter title"
                  />
                  <small className="text-danger mt-1 d-block">{errors.title?.message}</small>
                </div>

                {/* Level */}
                <div className="col-lg-4 mb-4">
                  <label className="form-label-premium">Expertise Level *</label>
                  <select
                    {...register("level")}
                    className="form-control-premium w-100"
                  >
                    <option value="">Select Level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                  <small className="text-danger mt-1 d-block">{errors.level?.message}</small>
                </div>

                {/* Rating */}
                <div className="col-lg-4 mb-4">
                  <label className="form-label-premium">Rating *</label>
                  <input
                    type="number"
                    {...register("rating")}
                    className="form-control-premium w-100"
                    placeholder="0 - 5"
                  />
                  <small className="text-danger mt-1 d-block">{errors.rating?.message}</small>
                </div>
              </div>

              <div className="row">
                {/* Duration */}
                <div className="col-lg-4 mb-4">
                  <label className="form-label-premium">Duration (Hours) *</label>
                  <input
                    type="number"
                    {...register("duration")}
                    className="form-control-premium w-100"
                    placeholder="Enter duration"
                  />
                  <small className="text-danger mt-1 d-block">{errors.duration?.message}</small>
                </div>

                {/* Type */}
                <div className="col-lg-4 mb-4">
                  <label className="form-label-premium">Course Type *</label>
                  <input
                    type="text"
                    {...register("type")}
                    className="form-control-premium w-100"
                    placeholder="Enter type"
                  />
                  <small className="text-danger mt-1 d-block">{errors.type?.message}</small>
                </div>

                {/* Status */}
                <div className="col-lg-4 mb-4">
                  <label className="form-label-premium">Active Status *</label>
                  <select
                    {...register("status")}
                    className="form-control-premium w-100"
                  >
                    <option value={1}>Active</option>
                    <option value={0}>Inactive</option>
                  </select>
                </div>
              </div>

              <div className="row">
                {/* Thumbnail */}
                <div className="col-lg-4 mb-4">
                  <label className="form-label-premium">Thumbnail Image *</label>
                  <input
                    type="file"
                    className="form-control-premium w-100"
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        setValue("thumbnail", e.target.files);
                      }
                    }}
                  />
                  <small className="text-danger mt-1 d-block">{errors.thumbnail?.message}</small>
                </div>

                {/* Content File */}
                <div className="col-lg-8 mb-4">
                  <label className="form-label-premium">Course Content File *</label>
                  <input
                    type="file"
                    className="form-control-premium w-100"
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        setValue("content", e.target.files);
                      }
                    }}
                  />
                  <small className="text-danger mt-1 d-block">{errors.content?.message}</small>
                </div>
              </div>

              {/* Description (Textarea) */}
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

export default CreateCourseForm;