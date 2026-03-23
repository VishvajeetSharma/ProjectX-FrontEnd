const CreateMasterCourseForm = () => {
  return (
    <div className="row my-bg-dark p-5">
      <div className="col-sm-8 mx-auto">
        <div className="card my-second-bg-dark text-white p-4 border-0 rounded-4 shadow-lg">
          <h2 className="fw-bold mb-4 text-center">Create Master Course</h2>

          <form>
            {/* Course Name */}
            <div className="mb-3">
              <label className="form-label">Master Course Name *</label>
              <input
                type="text"
                className="form-control border-0"
                placeholder="Enter course name"
              />
            </div>

            {/* Description */}
            <div className="mb-3">
              <label className="form-label">Description</label>
              <input
                type="text"
                className="form-control border-0"
                placeholder="Enter course description"
              />
            </div>

            {/* Status */}
            <div className="mb-3">
              <label className="form-label">Status *</label>
              <select className="form-control border-0">
                <option value={1}>Active</option>
                <option value={0}>Inactive</option>
              </select>
            </div>

            {/* Button */}
            <button className="btn my-btn w-100 py-2 mt-4 fw-bold">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateMasterCourseForm;