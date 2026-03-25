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
    <div className="row my-bg-dark p-5">
      <div className="col-sm-10 mx-auto">
        <div className="card my-second-bg-dark text-white p-4 border-0 rounded-4 shadow-lg">
          <h2 className="fw-bold mb-4 text-center">Create Course</h2>

          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="row">
              {/* Title */}
              <div className="col-sm-6">
                <div className="mb-3">
                  <label className="form-label">Title *</label>
                  <input
                    type="text"
                    {...register("title")}
                    className="form-control border-0"
                    placeholder="Enter title"
                  />
                  <small className="text-danger">{errors.title?.message}</small>
                </div>
              </div>

              {/* Description */}
              <div className="col-sm-6">
                <div className="mb-3">
                  <label className="form-label">Description *</label>
                  <input
                    type="text"
                    {...register("desc")}
                    className="form-control border-0"
                    placeholder="Enter description"
                  />
                  <small className="text-danger">{errors.desc?.message}</small>
                </div>
              </div>
            </div>

            <div className="row">
              {/* Level */}
              <div className="col-sm-6">
                <div className="mb-3">
                  <label className="form-label">Level *</label>
                  <select
                    {...register("level")}
                    className="form-control border-0"
                  >
                    <option value="">Select Level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                  <small className="text-danger">{errors.level?.message}</small>
                </div>
              </div>

              {/* Rating */}
              <div className="col-sm-6">
                <div className="mb-3">
                  <label className="form-label">Rating *</label>
                  <input
                    type="number"
                    {...register("rating")}
                    className="form-control border-0"
                    placeholder="0 - 5"
                  />
                  <small className="text-danger">{errors.rating?.message}</small>
                </div>
              </div>
            </div>

            <div className="row">
              {/* Duration */}
              <div className="col-sm-6">
                <div className="mb-3">
                  <label className="form-label">Duration *</label>
                  <input
                    type="number"
                    {...register("duration")}
                    className="form-control border-0"
                    placeholder="Enter duration"
                  />
                  <small className="text-danger">{errors.duration?.message}</small>
                </div>
              </div>

              {/* Type */}
              <div className="col-sm-6">
                <div className="mb-3">
                  <label className="form-label">Type *</label>
                  <input
                    type="text"
                    {...register("type")}
                    className="form-control border-0"
                    placeholder="Enter type"
                  />
                  <small className="text-danger">{errors.type?.message}</small>
                </div>
              </div>
            </div>

            <div className="row">
              {/* Status */}
              <div className="col-sm-6">
                <div className="mb-3">
                  <label className="form-label">Status *</label>
                  <select
                    {...register("status")}
                    className="form-control border-0"
                  >
                    <option value={1}>Active</option>
                    <option value={0}>Inactive</option>
                  </select>
                </div>
              </div>

              {/* Thumbnail */}
              <div className="col-sm-6">
                <div className="mb-3">
                  <label className="form-label">Thumbnail *</label>
                  <input
                    type="file"
                    className="form-control border-0"
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        setValue("thumbnail", e.target.files);
                      }
                    }}
                  />
                  <small className="text-danger">{errors.thumbnail?.message}</small>
                </div>
              </div>
            </div>

            {/* Content File */}
            <div className="mb-3">
              <label className="form-label">Content File *</label>
              <input
                type="file"
                className="form-control border-0"

                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    setValue("content", e.target.files);
                  }
                }}
              />
              <small className="text-danger">{errors.content?.message}</small>
            </div>

            {/* Button */}
            <button className="btn my-btn w-100 py-2 mt-4 fw-bold">
              Create Course
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCourseForm;