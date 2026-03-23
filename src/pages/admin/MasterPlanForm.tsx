
const MasterPlanForm = () => {
  return (
    <div className="row my-bg-dark p-5">
      <div className="col-sm-8 mx-auto">
        <div className="card my-second-bg-dark text-white p-4 border-0 rounded-4 shadow-lg">
          <h2 className="fw-bold mb-4 text-center">Create Master Plan</h2>

          <form >
            {/* Name */}
            <div className="mb-3">
              <label className="form-label">Master Plan Name *</label>
              <input
                type="text"
                className="form-control border-0"
                placeholder="Enter your name"
              />

            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email *</label>
              <input
                type="email"
                className="form-control border-0"
                placeholder="Enter your email"
              />

            </div>

            {/* Mobile */}
            <div className="mb-3">
              <label className="form-label">Mobile number *</label>
              <input
                type="text"
                className="form-control border-0"
                placeholder="Enter your number"
              />

            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="form-label">Password *</label>
              <input
                type="password"

                className="form-control border-0"
                placeholder="Enter your password"
              />

            </div>

            {/* Button */}
            <button className="btn my-btn w-100 py-2 mt-4 fw-bold">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default MasterPlanForm




