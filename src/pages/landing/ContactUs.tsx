import Navbar from "../../components/landing/Navbar";
import Footer from "../../components/landing/Footer";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h1>Contact Us</h1>
        <p>Have questions? Contact our team and we’ll help you out.</p>
        <div style={{height: "97px"}}></div>

      </div>
      <Footer />
    </>
  )
}

export default ContactUs;
