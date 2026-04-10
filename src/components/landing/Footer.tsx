import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="my-second-bg-dark pt-5 pb-3" style={{ color: 'var(--chrome-text-muted)' }}>
      <div className="container">
        <div className="row">

          {/* Logo + Description */}
          <div className="col-md-3 mb-4">
            <h4 className="fw-bold d-flex fs-1 align-items-center">
              Eduport
            </h4>
            <p className="mt-3" style={{ color: 'var(--chrome-text-muted)' }}>
              Eduport education theme, built specifically for the education centers
              which is dedicated to teaching and involve learners.
            </p>

            <div className="d-flex gap-2 mt-3">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, i) => (
                <div
                  key={i}
                  className="py-1 px-2 rounded"
                  style={{ cursor: "pointer", background: 'var(--chrome-elevated)', color: 'var(--chrome-text)' }}
                >
                  <Icon size={14} />
                </div>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="col-6 col-md-2 mb-4">
            <h6 className="fw-bold fs-4" style={{ color: 'var(--chrome-text)' }}>Company</h6>
            <ul className="list-unstyled small mt-3">
              <li className="mb-2">About Us</li>
              <li className="mb-2">Contact us</li>
              <li className="mb-2">News and Blogs</li>
              <li className="mb-2">Library</li>
              <li className="mb-2">Career</li>
            </ul>
          </div>

          {/* Community */}
          <div className="col-6 col-md-2 mb-4">
            <h6 className="fw-bold fs-4" style={{ color: 'var(--chrome-text)' }}>Community</h6>
            <ul className="list-unstyled small mt-3">
              <li className="mb-2">Instructors</li>
              <li className="mb-2">Workshop</li>
              <li className="mb-2">Help Center</li>
              <li className="mb-2">Faq</li>
            </ul>
          </div>

          {/* Teaching */}
          <div className="col-6 col-md-2 mb-4">
            <h6 className="fw-bold fs-4" style={{ color: 'var(--chrome-text)' }}>Teaching</h6>
            <ul className="list-unstyled small mt-3">
              <li className="mb-2">Become a teacher</li>
              <li className="mb-2">How to guide</li>
              <li className="mb-2">Terms & Conditions</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-6 col-md-2 mb-4">
            <h6 className="fw-bold fs-4 mb-3" style={{ color: 'var(--chrome-text)' }}>Contact</h6>
            <p className="small my-1">
              Toll free: <span style={{ color: 'var(--chrome-text)' }}>+1234 568 963</span>
            </p>
            <p className="small my-1">(9:AM to 8:PM IST)</p>
            <p className="small">
              Email: <span style={{ color: 'var(--chrome-text)' }}>example@gmail.com</span>
            </p>

            <div className="row d-flex gap-2 mt-2">
              <div className="com-sm-6">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  style={{ height: "40px" }}
                />
              </div>
              <div className="com-sm-6">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  style={{ height: "40px" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <hr className="border-secondary" />

        <div className="row align-items-center text-center text-md-start">

          {/* Left */}
          <div className="col-12 col-md-4 mb-2 mb-md-0">
            <p className="mb-0 text-light">
              © {new Date().getFullYear()} CourseCraft. All rights reserved.
            </p>
          </div>

          {/* Center */}
          <div className="col-12 col-md-4 text-center mb-2 mb-md-0">
            <p className="mb-0 text-light">
              Developed By: <strong>Tech Titans</strong>
            </p>
          </div>

          {/* Right */}
          <div className="col-12 col-md-4 text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <span>Language</span>
              <span>Terms</span>
              <span>Privacy</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;