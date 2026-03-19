
const RegistrationForm = () => {
  return (
    <div className="card bg-dark text-white p-4 border-0 rounded-4 shadow-lg">
      <h2 className="fw-bold mb-4">Register Yourself</h2>

      <form>
        {/* Name */}
        <div className="mb-3">
          <label className="form-label">Name *</label>
          <input
            type="text"
            className="form-control bg-secondary border-0 text-white"
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email *</label>
          <input
            type="email"
            className="form-control bg-secondary border-0 text-white"
            placeholder="Enter your email"
          />
        </div>

        {/* Mobile */}
        <div className="mb-3">
          <label className="form-label">Mobile number *</label>
          <input
            type="text"
            className="form-control bg-secondary border-0 text-white"
            placeholder="Enter your number"
          />
        </div>

        {/* Mobile */}
        <div className="mb-3">
          <label className="form-label">Password *</label>
          <input
            type="password"
            className="form-control bg-secondary border-0 text-white"
            placeholder="Enter your password"
          />
        </div>

        {/* Button */}
        <button className="btn btn-primary w-100 py-2 mt-4 fw-bold">
          Book a class
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
