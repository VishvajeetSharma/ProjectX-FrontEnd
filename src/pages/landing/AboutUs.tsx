import Navbar from "../../components/landing/Navbar";
import Footer from "../../components/landing/Footer";

const AboutUs = () => {

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h1>About Us</h1>
        <p>Welcome to Eduport. We are a learning platform built for students and educators.</p>
        <div style={{ height: "97px" }}></div>
      </div>
      <Footer />
    </>
  )
}

export default AboutUs;
