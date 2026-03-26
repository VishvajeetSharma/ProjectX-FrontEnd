
const RegistrationInfo = () => {
  return (
    <div className="text-dark p-4">

      <h1 className="fw-bold fs-2 mb-4">
        Register now and start your journey with our expert instructors
      </h1>

      {/* Feature 1 */}
      <div className="d-flex mb-4">
        <div className="me-3 fs-3">📝</div>
        <div>
          <h5 className="fw-bold">Simple Registration Process</h5>
          <p className="text-secondary mb-0">
            Fill in your basic details quickly and get instant access to our courses.
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="d-flex mb-4">
        <div className="me-3 fs-2">🎯</div>
        <div>
          <h5 className="fw-bold">Personalized Learning</h5>
          <p className="text-secondary mb-0">
            Register to receive course recommendations tailored to your goals.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="d-flex justify-content-between align-items-center mt-5 flex-wrap gap-3">

        {/* Students */}
        <div>
          <p className="text-secondary mb-1">Active Students</p>
          <div className="d-flex align-items-center">
            <img src="https://i.pravatar.cc/40?img=5" className="rounded-circle me-1" alt="student"/>
            <img src="https://i.pravatar.cc/40?img=6" className="rounded-circle me-1" alt="student"/>
            <img src="https://i.pravatar.cc/40?img=7" className="rounded-circle me-1" alt="student"/>
            <span className="badge bg-primary ms-2">2K+</span>
          </div>
        </div>

        {/* Ratings */}
        <div>
          <p className="text-secondary mb-1">Trusted by Learners</p>
          <h5 className="fw-bold">
            4.8/5.0 ⭐⭐⭐⭐⭐
          </h5>
        </div>

      </div>
    </div>
  );
};

export default RegistrationInfo;