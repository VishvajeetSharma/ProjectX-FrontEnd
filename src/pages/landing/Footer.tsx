import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="my-second-bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row">

          {/* Logo + Description */}
          <div className="col-md-3 mb-4">
            <h4 className="fw-bold d-flex fs-1 align-items-center">
               Eduport
            </h4>
            <p className="mt-3">
              Eduport education theme, built specifically for the education centers
              which is dedicated to teaching and involve learners.
            </p>

            <div className="d-flex gap-2 mt-3">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, i) => (
                <div
                  key={i}
                  className="bg-light text-dark py-1 px-2 rounded"
                  style={{ cursor: "pointer" }}
                >
                  <Icon size={14} />
                </div>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="col-6 col-md-2 mb-4">
            <h6 className="fw-bold fs-4 text-white">Company</h6>
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
            <h6 className="fw-bold  fs-4 text-white">Community</h6>
            <ul className="list-unstyled small mt-3">
              <li className="mb-2">Instructors</li>
              <li className="mb-2">Workshop</li>
              <li className="mb-2">Help Center</li>
              <li className="mb-2">Faq</li>
            </ul>
          </div>

          {/* Teaching */}
          <div className="col-6 col-md-2 mb-4">
            <h6 className="fw-bold  fs-4 text-white">Teaching</h6>
            <ul className="list-unstyled small mt-3">
              <li className="mb-2">Become a teacher</li>
              <li className="mb-2">How to guide</li>
              <li className="mb-2">Terms & Conditions</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-6 col-md-2 mb-4">
            <h6 className="fw-bold fs-4 mb-3 text-white">Contact</h6>
            <p className="small my-1">
              Toll free: <span className="text-white">+1234 568 963</span>
            </p>
            <p className="small my-1">(9:AM to 8:PM IST)</p>
            <p className="small">
              Email: <span className="text-white">example@gmail.com</span>
            </p>

            <div className="d-flex gap-2 mt-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                style={{ height: "40px" }}
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                style={{ height: "40px" }}
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <hr className="border-secondary" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center ">
          <p className="mb-2 mb-md-0">
            Copyrights ©2026 Eduport. Build by
          </p>

          <div className="d-flex gap-3">
            <span>Language</span>
            <span>Terms of use</span>
            <span>Privacy policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;