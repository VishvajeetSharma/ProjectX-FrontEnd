import { FaEnvelope, FaCheckCircle, FaPlay } from "react-icons/fa";
const HeroSection = () => {
  return (
    <>
      <section className="hero-section">
        {/* Decorative Background Elements */}
        <div className="hero-blob hero-blob-1"></div>
        <div className="hero-blob hero-blob-2"></div>
        <div className="hero-dot-pattern"></div>

        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row align-items-center g-5">

            {/* <!-- LEFT CONTENT --> */}
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="hero-title">
                Limitless learning at your <span className="highlight-brush">fingertips</span>
              </h1>

              <p className="hero-subtitle">
                Online learning and teaching marketplace with 5K+ courses & 10M students.
                Taught by experts to help you acquire new skills.
              </p>

              <ul className="hero-list">
                <li><FaCheckCircle className="me-2 text-success" /> Learn with experts</li>
                <li><FaCheckCircle className="me-2 text-success" /> Get certificate</li>
                <li><FaCheckCircle className="me-2 text-success" /> Get membership</li>
              </ul>

              <div className="hero-actions">
                <a href="#" className="btn btn-get-started">Get Started</a>

                <div className="watch-video">
                  <span className="play-btn">
                    <FaPlay size={14} className="ms-1" />
                  </span>
                  <span>Watch video</span>
                </div>
              </div>
            </div>

            {/* <!-- RIGHT IMAGE --> */}
            <div className="col-lg-6 text-center position-relative">
              <div className="hero-image-container">
                <div className="hero-bg-shape"></div>
                <img src="https://themes.stackbros.in/eduport_ng/assets/images/element/07.png" className="img-fluid hero-img" alt="Hero" />

                {/* <!-- Floating Elements --> */}
                <div className="floating-congrats">
                  <div className="bg-warning p-2 d-flex align-items-center justify-content-center rounded-circle" style={{ width: '40px', height: '40px' }}>
                    <FaEnvelope className="text-white" />
                  </div>
                  <div className="text-start">
                    <h6 className="mb-0 fw-bold small" style={{ color: '#fff' }}>Congratulations</h6>
                    <p className="mb-0 x-small" style={{ color: 'rgba(255,255,255,0.5)' }}>Your admission completed</p>
                  </div>
                </div>

                <div className="floating-students">
                  <p className="mb-1 x-small fw-bold">Our daily new students</p>
                  <div className="d-flex align-items-center">
                    <div className="avatars-group d-flex me-2">
                       <img src="https://randomuser.me/api/portraits/men/1.jpg" width="25" height="25" className="rounded-circle border border-2 border-success" alt="student" style={{marginLeft: '-8px'}} />
                       <img src="https://randomuser.me/api/portraits/women/1.jpg" width="25" height="25" className="rounded-circle border border-2 border-success" alt="student" style={{marginLeft: '-8px'}} />
                       <img src="https://randomuser.me/api/portraits/men/2.jpg" width="25" height="25" className="rounded-circle border border-2 border-success" alt="student" style={{marginLeft: '-8px'}} />
                    </div>
                    <span className="badge bg-primary rounded-pill x-small">1K+</span>
                  </div>
                </div>

                {/* Floating Icons Loop - Static for now as per image */}
                {/* <div className="floating-icon" style={{top: '10%', right: '10%'}}><img src="https://upload.wikimedia.org/wikipedia/commons/a/cf/Angular_full_color_logo.svg" width="25" alt="angular" /></div> */}
                <div className="floating-icon" style={{top: '30%', left: '0%'}}><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="25" alt="react" /></div>
                <div className="floating-icon" style={{bottom: '20%', right: '0%'}}><img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" width="15" alt="figma" /></div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection

