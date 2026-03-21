import { TypeAnimation } from "react-type-animation";
import { FaEnvelope } from "react-icons/fa";
const HeroSection = () => {
  return (
    <>
      <section className="hero-section my-bg-dark">
        <div className="container">
          <div className="row align-items-center g-5">

            {/* <!-- LEFT CONTENT --> */}
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="hero-title">
                <TypeAnimation
                  sequence={[
                    "Limitless learning at your fingertips",
                    2000,
                    "Limitless learning at your comfort",
                    2000,
                    "Limitless learning at your home",
                    2000,
                  ]}
                  speed={10}
                  repeat={Infinity}
                  wrapper="span"
                  cursor={true}
                />
              </h1>

              <p className="hero-subtitle">
                Online learning and teaching marketplace with 5K+ courses & 10M students.
                Taught by experts to help you acquire new skills.
              </p>

              <ul className="hero-list">
                <li>✔ Learn with experts</li>
                <li>✔ Get certificate</li>
                <li>✔ Get membership</li>
              </ul>

              <div className="hero-actions">
                <a href="#" className="btn btn-danger">Get Started</a>

                <div className="watch-video">
                  <span className="play-btn">▶</span>
                  <span>Watch video</span>
                </div>
              </div>
            </div>

            {/* <!-- RIGHT IMAGE --> */}
            <div className="col-lg-6 text-center position-relative">
              <div className="hero-image-wrapper">
                <img src="https://themes.stackbros.in/eduport_ng/assets/images/element/07.png" className="img-fluid hero-img" />

                {/* <!-- Floating Card --> */}
                <div className="floating-card d-flex justify-content-between">
                  <div className="bg-warning px-3 py-1 fs-2 rounded rounded-circle me-2">
                    <FaEnvelope />
                  </div>
                  <div>
                    <strong>Congratulations</strong>
                  <p>Your admission completed</p>
                  </div>
                </div>

                {/* <!-- Badge --> */}
                <div className="students-badge">
                  <b>Our daily new students </b>
                  <span>1K+</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection

