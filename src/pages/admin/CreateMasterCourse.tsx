import DashboardLayout from "../../layout/DashboardLayout"

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { showALert } from "../../utils";
import { createMasterCourse, getMasterCourseById, updateMasterCourse } from "../../services";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";


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

  thumbnail: yup.mixed().test("required", "Thumbnail is required", function (value) {
    const { id } = this.options.context as any;
    if (id) return true; // Optional on edit
    return value && (value as any).length > 0;
  }),

  content: yup.mixed().test("required", "Content file is required", function (value) {
    const { id } = this.options.context as any;
    if (id) return true; // Optional on edit
    return value && (value as any).length > 0;
  }),
});

const CreateMasterCourse = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(schema),
    context: { id },
    defaultValues: {
      status: 1,
    },
  });

  useEffect(() => {
    if (id) {
      const fetchCourse = async () => {
        setLoading(true);
        try {
          const res = await getMasterCourseById(id);
          if (res.success) {
            const course = res.result;
            setValue("title", course.title);
            setValue("desc", course.desc);
            setValue("level", course.level);
            setValue("rating", course.rating);
            setValue("duration", course.duration);
            setValue("type", course.type);
            setValue("status", course.status);
          }
        } catch (error) {
          showALert("Course", "Failed to fetch course details", "error");
        } finally {
          setLoading(false);
        }
      };
      fetchCourse();
    }
  }, [id, setValue]);


  const onSubmit = async (data: any) => {
    try {
      const formData = new FormData();

      formData.append("title", data.title);
      formData.append("desc", data.desc);
      formData.append("level", data.level);
      formData.append("rating", data.rating);
      formData.append("duration", data.duration);
      formData.append("type", data.type);
      formData.append("status", data.status);

      if (data.thumbnail && data.thumbnail[0]) {
        formData.append("thumbnail", data.thumbnail[0]);
      }
      if (data.content && data.content[0]) {
        formData.append("content", data.content[0]);
      }

      let res;
      if (id) {
        res = await updateMasterCourse(id, formData);
      } else {
        res = await createMasterCourse(formData);
      }

      if (res.success) {
        showALert("Course", res.message, "success");
        if (!id) reset();
      } else {
        showALert("Course", res.message, "error");
      }
    } catch (error) {
      showALert("Course", "Internal server error", "error");
    }
  };

  if (loading) return <div className="theme-text-primary p-4">Loading...</div>;

  return (
    <DashboardLayout>
      <div className="container-fluid py-3 px-4 overflow-hidden">
        <div className="row">
          <div className="col-12 mx-auto">
            <h2 className="fw-bold">{id ? "Edit" : "Create"} Master Course</h2>
            <div className="form-section-card">

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
                    <small className="text-danger mt-1 d-block">{(errors.title as any)?.message}</small>
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
                    <small className="text-danger mt-1 d-block">{(errors.level as any)?.message}</small>
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
                    <small className="text-danger mt-1 d-block">{(errors.rating as any)?.message}</small>
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
                    <small className="text-danger mt-1 d-block">{(errors.duration as any)?.message}</small>
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
                    <small className="text-danger mt-1 d-block">{(errors.type as any)?.message}</small>
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
                    <small className="text-danger mt-1 d-block">{(errors.thumbnail as any)?.message}</small>
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
                    <small className="text-danger mt-1 d-block">{(errors.content as any)?.message}</small>
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
                      <small className="text-danger mt-1 d-block">{(errors.desc as any).message}</small>
                    )}
                  </div>

                  {/* Form Buttons */}
                  <div className="col-lg-4 mb-4 d-flex justify-content-end gap-2">
                    <button type="button" className="btn btn-cancel" onClick={() => reset()}>Cancel</button>
                    <button type="submit" className="btn btn-submit">{id ? "Update" : "Submit"}</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default CreateMasterCourse