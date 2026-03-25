
import RegistrationForm from "./RegistrationForm";
import RegistrationInfo from "./RegistrationInfo";



const Registration = () => {
  return (
    <>
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
    </>

  );
};

export default Registration;

