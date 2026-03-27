
import RegistrationForm from "../../components/landing/RegistrationForm";
import RegistrationInfo from "../../components/landing/RegistrationInfo";
import Navbar from "../../components/landing/Navbar";
import Footer from "../../components/landing/Footer";



const Registration = () => {
  return (
    <>
      <Navbar />
      <div className="row align-items-center py-5 my-bg-dark">
        <div className="col-sm-10 mx-auto">
          <div className="row">
            {/* Left */}
            <div className="col-lg-5 mb-4">
              <RegistrationInfo />
            </div>
            <div className="col-sm-1"></div>
            {/* Right */}
            <div className="col-lg-6">
              <RegistrationForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>

  );
};

export default Registration;

