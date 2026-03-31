import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState, useContext } from "react";
import * as yup from "yup";
import { showALert } from "../../utils";
import { userUpdateProfile } from "../../services";
import { UserContext } from "../../context/user/UserContext";
import DashboardLayout from "../../layout/DashboardLayout";

const schema = yup.object().shape({
  name: yup.string().required().min(3),
  email: yup.string().required().email(),
  mobile: yup.string().required(),
  address: yup.string().required(),
  profile: yup.mixed(),
});

const UpdateProfile = () => {
  const { user, setUser } : any = useContext(UserContext);
  const [loading, setLoading] = useState(false);
console.log(user,"############");


  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        let data = user;

        if (data) {
          setValue("name", data.name);
          setValue("email", data.email);
          setValue("mobile", data.mobile);
        }
      } catch (err) {
        showALert("Profile", "Failed to load profile", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user, setValue]);

  const onSubmit = async (data: any) => {
    try {
      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("mobile", data.mobile);
      formData.append("address", data.address);

      if (data.profile && data.profile[0]) {
        formData.append("profile", data.profile[0]);
      }

      const res = await userUpdateProfile(formData);

      if (res.success) {
        showALert("Profile", res.message, "success");
        setUser(res?.result)
      } else {
        showALert("Profile", res.message, "error");
      }
    } catch (error) {
      showALert("Profile", "Internal Server Error", error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <DashboardLayout>
    <div className="container py-4">
     

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row p-4">
           <h2>Update Profile</h2>
          {/* Name */}
          <div className="col-md-6 mb-3">
            <label>Name</label>
            <input {...register("name")} className="form-control" />
            <small className="text-danger">{errors.name?.message}</small>
          </div>

          {/* Email */}
          <div className="col-md-6 mb-3">
            <label>Email</label>
            <input disabled={true} {...register("email")} className="form-control" />
            <small className="text-danger">{errors.email?.message}</small>
          </div>

          {/* Mobile */}
          <div className="col-md-6 mb-3">
            <label>Mobile</label>
            <input {...register("mobile")} className="form-control" />
            <small className="text-danger">{errors.mobile?.message}</small>
          </div>

          {/* Address */}
          <div className="col-md-6 mb-3">
            <label>Address</label>
            <input {...register("address")} className="form-control" />
            <small className="text-danger">{errors.address?.message}</small>
          </div>

          {/* Profile Image */}
          <div className="col-md-6 mb-3">
            <label>Profile Image</label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => {
                if (e.target.files?.length) {
                  setValue("profile", e.target.files);
                }
              }}
            />
          </div>
           <div className="col-md-6 mb-3"> 
             <button className="btn btn-primary w-100 mt-4 py-2">Update Profile</button>
          </div>

          
        </div>
      </form>
    </div>
    </DashboardLayout>
  );
};

export default UpdateProfile;